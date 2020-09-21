# Wedding Website App!

![Animal Crossing](/public/img/co_bl.png)   _By Mimi Netto_

## Minimum Viable Product

- [x] A working full-stack application, built by you, using Node.js, Mongoose, Express and EJS
- [x] Adhere to the MVC file structure: Models, Views, Controllers
- [x] At least one model with all 7 RESTful routes and full CRUD.
- [x] ❗ A git repository not inside the class repo.
- [x] At least one Github commit per day.
- [x] Be deployed online and accessible to the public via Heroku
 -[x] A README.md file with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
- [x] Have a link to your hosted working app in the README.md file in your github rep

![ga](/public/img/gaLogo.png) <br>

#### Restful Routes
|#|Action|URL|HTTP Verb|EJS view filename|mongoose method|
|:---:|:---:|:---:|:---:|:---:|:---:|
|1| Index | /rsvps/ | GET | index.ejs | Rsvp.find() |
|2| Show | /rsvps/:id | GET | show.ejs | Rsvp.findById(req.params.id) |
|3| New | /rsvps/new | GET | new.ejs | none |
|4| Create | /rsvps/ | POST| none | Rsvp.create(req.body)|
|5| Edit | /rsvps/:id/edit | GET | edit.ejs | Rsvp.findById(req.params.id) |
|6| Update | /rsvps/:id | PUT | n/a | Rsvp.findByIdAndUpdate(req.params.id) |
|7| Destroy | /rsvps/:id | DELETE | n/a | Rsvp.findByIdAndRemove(req.params.id) |


For General Assembly SEIR 810 Moss!
