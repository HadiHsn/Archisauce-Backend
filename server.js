const express = require("express");
const bodyParser = require('body-parser');


const app = express();
const mongo = require("./mongoose");
const bcrypt = require("bcrypt");
const { User, validate } = require("./models/user.model");
const { DataCollectionForm } = require("./models/formDataCollection.model");
const { DesignForm } = require("./models/formDesign.model");
const { ConstructionForm } = require("./models/formConstruction.model");
const { MailingSubscriptionList } = require("./models/mailingSubscriptionList.model");
const { MessagesAndRecommendations } = require("./models/messagesAndRecommendations.model");
MessagesAndRecommendations
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

const port = process.env.PORT || 3002

app.listen(port, () => {
  console.log("Server is up and running!")
});

app.post('/signup', async (req, res) => {

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User Already Registered!");

  try {
    const newAccount = {
      email: req.body.email,
      firstName: req.body.firstName,
      password: req.body.password
    }
    user = new User(newAccount);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    res.send({ user: user });
  } catch (error) {
    console.log("err");
    res.send(error);
  }
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email
    });
    if (!user)
      return res.status(400).json({
        message: "User Doesn't Exist!"
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Incorrect Password!"
      });
    res.send({ user: user });

  } catch (error) {
    console.log("err");
    res.send(error);
  }
}
);

app.post('/formdatacollection', async (req, res) => {
  let form = await DataCollectionForm.findOne({ email: req.body.email, type: req.body.type});
  if (form) return res.status(400).send("Response Already Submitted");
  try {
      const newDataCollectionForm = {
      email: req.body.email,
      region: req.body.region,
      country: req.body.country,
      peers: req.body.peers,
      type: req.body.type
    }
    dataCollectionForm = new DataCollectionForm(newDataCollectionForm);
    await dataCollectionForm.save();
    res.send({ dataCollectionForm: dataCollectionForm });
  
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/formdesign', async (req, res) => {
  let form = await DesignForm.findOne({ email: req.body.email, type: req.body.type});
  if (form) return res.status(400).send("Response Already Submitted");
  try {
      const newDesignForm = {
      email: req.body.email,
      advantages: req.body.advantages,
      disadvantages: req.body.disadvantages,
      type: req.body.type
    }
    designForm = new DesignForm(newDesignForm);
    await designForm.save();
    res.send({ designForm: designForm });
  
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/formconstruction', async (req, res) => {
  let form = await ConstructionForm.findOne({ email: req.body.email, type: req.body.type});
  if (form) return res.status(400).send("Response Already Submitted");
  try {
      const newConstructionForm = {
      email: req.body.email,
      building: req.body.building,
      construction: req.body.construction,
      type: req.body.type
    }
    constructionForm = new ConstructionForm(newConstructionForm);
    await constructionForm.save();
    res.send({ constructionForm: constructionForm });
  
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/mailingsubscription', async (req, res) => {
  let form = await MailingSubscriptionList.findOne({ email: req.body.email });
  if (form) return res.status(400).send("Email Already Added!");
  try {
      const newMail = {
      email: req.body.email
    }
    mail = new MailingSubscriptionList(newMail);
    await mail.save();
    res.send({ mail: mail });
  
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/message', async (req, res) => {
  let form = await MessagesAndRecommendations.findOne({ email: req.body.email });
  if (form) return res.status(400).send("We Have Recieved Your Message, We'll Reply in the next few days!");
  try {
      const newMessage = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    message = new MessagesAndRecommendations(newMessage);
    await message.save();
    res.send({ message: message });
  
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

mongo.connect();