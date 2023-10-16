const { admin } = require('../firebaseConfig');

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userRecord = await admin.auth().getUserByEmail(email);

    const user = {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
    };

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { email, password, displayName } = req.body;

    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    const user = {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
    };

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
