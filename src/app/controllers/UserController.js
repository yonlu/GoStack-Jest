import User from '../models/User';

class UserController {
  async store(req, res) {
    if (req.body.email === 'lucas.sallada@gmail.com') {
      return res.status(400).json({ error: 'Bad email' });
    }
    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
