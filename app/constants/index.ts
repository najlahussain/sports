export const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "events",
      title: "Events",
    },
    {
        id: "membership",
        title: "Membership",
    },
    {
        id: "salon",
        title: "Salon",
    },
    {
        id: "contact",
        title: "Contact",
    },
  ];

  export type FormData = {
    title: string,
    name?: string;
    email: string;
    phone?: string;
    events?: string;
    address?:string,
    message?:string,
    year?:string,
  };

  export type SanityData = {
    image : any,
    title?: string,
    description?: string,
    slug : any
  }

  export type AboutData = {
    image : any,
    sideImage: any,
    description: string,
    reviews: string,
    customer:string
  }

  export type EventsData = {
    image : any, 
    description : string, 
    galleryImage : any, 
    test1Image : any, 
    test1Name : string, 
    test1desc : string,
    test2Image : any,
    test2Name : string,
    test2desc : string,
    test3Image : any,
    test3Name : string,
    test3desc : string,
  }

  export type SalonData = {
    image : any, 
    description : string, 
    sideImage : any, 
    services : string, 
    spaText : string, 
    spaImage1 : any,
    spaImage2 : any,
    spaImage3 : any,
  }

  export type ContactData = {
    email : string,
    phone : string,
    sideImage : any,
    bg : any
  }

  export type PicturesData = {
    title: string,
    image: any,
    slug:any
  }