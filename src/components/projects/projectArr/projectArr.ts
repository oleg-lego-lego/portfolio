import carRent from '../../../images/projectPhoto/autoRentProject.png'
import todolist from '../../../images/projectPhoto/todolist.png'

export type MyProjects = {
    hrefGitHub: string
    photo: string
    title: string
    text: string
    technologiesOne: string
    technologiesTwo: string
    hrefVercel: string
}

export const projects: MyProjects[] = [
    {
        hrefGitHub: 'https://github.com/oleg-lego-lego/autoRent',
        hrefVercel: 'https://auto-rent-sooty.vercel.app/',
        photo: carRent,
        title: 'Car rent 🚗',
        text: `Car rental platform is an online service where users can easily rent vehicles. 
              Choose your desired car, add it to the rental cart, and you are all set!
              Conveniently plan your trips quickly and easily.`,
        technologiesOne: 'React',
        technologiesTwo: 'Redux Toolkit',
    },
    {
        hrefGitHub: 'https://github.com/oleg-lego-lego/todolist_for_the_lesson',
        hrefVercel: 'https://todolist-two-gamma.vercel.app/',
        photo: todolist,
        title: 'todo list 📝',
        text: `Welcome to our online task management service, where users can easily create their to-do lists.
               Just add your tasks! Conveniently plan your tasks quickly and easily, 
               always having control over your schedule.`,
        technologiesOne: 'React',
        technologiesTwo: 'Redux',
    },
]