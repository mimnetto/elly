# Wedding Guestbook App!

![Colleen and Blake](/public/img/co_bl.png)   _By Mimi Netto_

[Wedding Guestbook](https://ellypuppy.herokuapp.com/)

## Minimum Viable Product

- [x] A working full-stack application, built by you, using Node.js, Mongoose, Express and EJS
- [x] Adhere to the MVC file structure: Models, Views, Controllers
- [x] At least one model with all 7 RESTful routes and full CRUD.
- [x] A git repository not inside the class repo.
- [x] At least one Github commit per day.
- [x] Be deployed online and accessible to the public via Heroku
 -[x] A README.md file with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
- [x] Have a link to your hosted working app in the README.md file in your github rep

#### Wireframes
[Index](/public/img/wireframe00.png)

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

## Technologies, Approaches, Fails and Wins

### Tech & Approaches
* Bootstrap
  * I used Bootstrap for this project. I've worked with it in the past but
* Custom css
  * I used a lot of my own CSS but I feel it could have been better
* Partials
  * I love the idea of partials but there were some problems I ran into like not being able to use an active class for the nav links.
* Graphics
  * I made my own graphics with photoshop


### Struggles

* It took a while to configure everything once I made controllers. There was a lot of debugging.
* Ran into several database issues but luckily they all were pretty easy to solve.

### Failed Attempts
* Timestamp date formating
  * I was just really confused on where to put what. I tried for a really long time but just couldn't find where everything needed to be.
* Radio
  * I tried for awhile to get the radio selection correct during editing
* Photo upload
  * I wanted the user to be able to upload a photo but it didn't take long before I decided I wasn't ready for that

### Wins!

* I was able to debug database issues on my own
* I enjoyed making this!

### Thoughts and Notes

* I feel like I held back a little because I was afraid one thing can throw something out of wack. I'm still not confident enough with my JavaScript to get super adventurous.
* I actually want to use this page and was thinking about how I could get it work with what I know but I would have to figure out how to make the user only able to edit their own post when logged in.

![ga](/public/img/gaLogo.png) <br>
For General Assembly SEIR 810 Moss!
