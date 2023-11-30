import carRent from '../../images/autoRentProject.png'

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
]