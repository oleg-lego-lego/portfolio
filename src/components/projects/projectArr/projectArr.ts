import carRent from '../../../images/projectPhoto/autoRentProject.png'
import todolist from '../../../images/projectPhoto/todolist.png'
import tableSorting from '../../../images/projectPhoto/table-sorting.png'

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
    {
        hrefGitHub: 'https://github.com/oleg-lego-lego/beer_List',
        hrefVercel: 'https://table-sorting-ten.vercel.app/',
        photo: tableSorting,
        title: 'table sorting 🗄️',
        text: `Welcome to our alcohol catalog! Here, you can easily find the perfect beverage 
              using our available filters. You can sort products by name, alcohol strength, and country of origin. 
              This way, you can quickly discover a drink that matches your preferences and mood. 
              Dive into a world of diverse flavors and explore the intricacies of alcohol culture!`,
        technologiesOne: 'Redux Toolkit',
        technologiesTwo: 'Ant Design',
    },
]