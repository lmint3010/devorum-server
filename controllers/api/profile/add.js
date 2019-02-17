const profileModel = require('../../../models/profile-model')


/* User profile add controller flow
  (1) Create a new document via user form submit data
  (2) If user profile existed
        Update profile --> Response json of updated data
  (3) Else
        Create new profile document --> Response json of data saved */

module.exports = async (req, res) => {
  // Get form submit data
  const {
    handle, company, website, location,
    status, bio, skills, youtube, facebook, twitter, instagram
  } = req.body

  // Initial profile fields
  const profileFields = { user: req.user.id }

  // String
  if (company) profileFields.company = company
  if (website) profileFields.website = website
  if (location) profileFields.location = location
  if (github) profileFields.github = github
  if (bio) profileFields.bio = bio

  // String - required
  if (handle) profileFields.handle = handle
  if (status) profileFields.status = status

  // Skills - separate by comma => Split to array elements
  if (skills) profileFields.skills = skills.split(',')

  // Social - Expected an object
  const socials = {}
  if (youtube) socials.youtube = youtube
  if (facebook) socials.facebook = facebook
  if (twitter) socials.twitter = twitter
  if (instagram) socials.instagram = instagram

  if (JSON.stringify(socials) !== '{}') profileFields.socials = socials

  const profile = await profileModel.findOne({ user: req.user.id })

  // Update
  if(profile) {
    const update = profileModel.findOneAndUpdate(
      { user: profileFields.user },
      { $set: profileFields },
      { new: true }
    )
    return res.json(update)
  }

  // Create
  const handleFound = profileModel.findOne({ handle: profileFields.handle })
  if (handleFound) return res.status(400).json('That handle already exists')
  const newProfile = new Profile(profileFields)
  const savedProfile = await newProfile.save()
  res.json(savedProfile)
}