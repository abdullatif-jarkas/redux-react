// for navbar
export const navLinks = [
  {
    to: "",
    name: "blog",
  },
  {
    to: "",
    name: "projects",
  },
  {
    to: "",
    name: "about",
  },
  {
    to: "newsletter",
    name: "newsletter",
  },
];

// for footer
export const footerLinks = [
  {
    to: "",
    name: "twitter",
  },
  {
    to: "",
    name: "linkedin",
  },
  {
    to: "",
    name: "email",
  },
  {
    to: "",
    name: "RSS feed",
  },
  {
    to: "",
    name: "add to feedly",
  },
];

// cards_content
import blogOne from "./../public/images/blogImgOne.svg";
import blogTwo from "./../public/images/blogImgTwo.svg";
import blogThree from "./../public/images/blogImgThree.svg";
import blogFour from "./../public/images/blogImgFour.svg";
import blogFive from "./../public/images/blogImgFive.svg";
import blogSix from "./../public/images/blogImgSix.svg";
import blogSeven from "./../public/images/blogImgSeven.svg";
import blogEight from "./../public/images/blogImgEight.svg";
import blogNine from "./../public/images/blogImgNine.svg";
import blogTen from "./../public/images/blogImgTen.svg";

import img1 from "./../public/images/content1.svg";
import img2 from "./../public/images/content2.svg";
import img3 from "./../public/images/content3.svg";
import img4 from "./../public/images/content4.svg";
import img5 from "./../public/images/content5.svg";
import img6 from "./../public/images/content6.svg";
import img7 from "./../public/images/content7.svg";
import img8 from "./../public/images/content8.svg";
import img9 from "./../public/images/content9.svg";

export const cardContent = [
  {
    id: 1,
    image: blogFive,
    author: "Alec Whitten • 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    txt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Leadership",
      },
      {
        bg: "bg-bg-navy-blue",
        color: "text-navy-blue",
        txt: "Management",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 2,
    image: blogSix,
    author: "Demi WIlkinson • 1 Jan 2023",
    title: "PM mental models",
    txt: "Mental models are simple expressions of complex processes or relationships.",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "product",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-orange",
        color: "text-orange",
        txt: "framework",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 3,
    image: blogSeven,
    author: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    txt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],

    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 4,
    image: blogEight,
    author: "Natali Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    txt: "Collaboration can make our teams stronger, and our individual designs better.",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
  },
  {
    id: 5,
    image: blogNine,
    author: "Drew Cano • 1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    txt: "JavaScript frameworks make development easy with extensive features and functionalities.",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-green",
        color: "text-green",
        txt: "Software Development",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "tools",
      },
      {
        bg: "bg-bg-rose-red",
        color: "text-rose-red",
        txt: "SaaS",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 6,
    image: blogTen,
    author: "Orlando Diggs • 1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    txt: "Starting a community doesn’t need to be complicated, but how do you get started?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "podcasts",
      },
      {
        bg: "bg-bg-navy-blue",
        color: "text-navy-blue",
        txt: "Customer Success",
      },
    ],
  },
  {
    id: 7,
    image: blogEight,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 8,
    image: blogFive,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 9,
    image: blogFive,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 10,
    image: blogSix,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-rose-red",
        color: "text-rose-red",
        txt: "Design",
      },
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 11,
    image: blogEight,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-orange",
        color: "text-orange",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 12,
    image: blogTwo,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-green",
        color: "text-green",
        txt: "Design",
      },
      {
        bg: "bg-bg-navy-blue",
        color: "text-navy-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 13,
    image: blogFour,
    author: "Olivia Rhye • 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    txt: "A grid system is a design tool used to arrange content on a webpage. .",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-orange",
        color: "text-orange",
        txt: "interface",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 14,
    image: blogThree,
    author: "Lana Steiner • 1 Jan 2023",
    title: "Building your API Stack",
    txt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-green",
        color: "text-green",
        txt: "Design",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 15,
    image: blogTwo,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "Migrating to Linear 101",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 16,
    image: blogOne,
    author: "Olivia Rhye • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 17,
    image: blogFour,
    author: "Alec Whitten • 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 18,
    image: blogThree,
    author: "Olivia Rhye • 1 Jan 2023",
    title: "Building your API Stack",
    txt: "A grid system is a design tool used to arrange content on a webpage. .",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-orange",
        color: "text-orange",
        txt: "interface",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 19,
    image: blogTwo,
    author: "Lana Steiner • 1 Jan 2023",
    title: "Migrating to Linear 101",
    txt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-green",
        color: "text-green",
        txt: "Design",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  ,
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 10,
    image: blogSix,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-rose-red",
        color: "text-rose-red",
        txt: "Design",
      },
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 11,
    image: blogEight,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-orange",
        color: "text-orange",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 12,
    image: blogTwo,
    author: "Alec Whitten • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-green",
        color: "text-green",
        txt: "Design",
      },
      {
        bg: "bg-bg-navy-blue",
        color: "text-navy-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 13,
    image: blogFour,
    author: "Olivia Rhye • 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    txt: "A grid system is a design tool used to arrange content on a webpage. .",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-orange",
        color: "text-orange",
        txt: "interface",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 14,
    image: blogThree,
    author: "Lana Steiner • 1 Jan 2023",
    title: "Building your API Stack",
    txt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-green",
        color: "text-green",
        txt: "Design",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 15,
    image: blogTwo,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "Migrating to Linear 101",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 16,
    image: blogOne,
    author: "Olivia Rhye • 1 Jan 2023",
    title: "UX review presentations",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 17,
    image: blogFour,
    author: "Alec Whitten • 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Presentation",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 18,
    image: blogThree,
    author: "Olivia Rhye • 1 Jan 2023",
    title: "Building your API Stack",
    txt: "A grid system is a design tool used to arrange content on a webpage. .",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-purple",
        color: "text-purple",
        txt: "Design",
      },
      {
        bg: "bg-bg-orange",
        color: "text-orange",
        txt: "interface",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 19,
    image: blogTwo,
    author: "Lana Steiner • 1 Jan 2023",
    title: "Migrating to Linear 101",
    txt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-green",
        color: "text-green",
        txt: "Design",
      },
      {
        bg: "bg-bg-pink",
        color: "text-pink",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
  {
    id: 20,
    image: blogOne,
    author: "Phoenix Baker • 1 Jan 2023",
    title: "UX review presentations",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    mainText:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    anotherText:
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    head: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",

    categories: [
      {
        bg: "bg-bg-aqua",
        color: "text-aqua",
        txt: "Design",
      },
      {
        bg: "bg-bg-blue",
        color: "text-blue",
        txt: "Research",
      },
    ],
    sections: [
      {
        img: img1,
        title: `
        Definition: A grid is made up of columns, gutters, and 
        margins that provide a structure for the layout of elements on a page.`,
        descOne: `There are three common grid types used in web
        sites and interfaces: column grid, modular grid, and hierarchical grid.
        <br/>
        <br/>
        Column grid involves dividing a page into vertical colum
        ns. UI elements and content are then aligned to these columns.
        <br/>
        <br/>
        Modular grid extends the column grid further by adding
         rows to it. This intersection of columns and rows make up modu
         les to which elements and content are aligned. Modular grids are great for ecommerce and listin
         g pages, as rows are repeatable to accommodate browsing.
        <br/>
        <br />
        Hierarchical grid: Content is organized by importance 
        using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.

        `,
        descTwo: `
        <b>Breaking Down the Grid</b>
        <br/>
        Regardless of the type of grid you are using, the grid is made up
         of three elements: columns, gutters, and margins.
        <br/>
        <br/>
        <b>Columns:</b>
         Columns take up mos
        t of the real estate in a grid. Elements and content are plac
        ed in columns. To adapt to any screen size, column widths
         are generally defined wit
        h percentages rather than fixed values and the number of columns will
         vary. For example, a grid on a mobile device mig
        ht have 4 columns and a grid on a desktop might have 12 columns.
        <br/>
        <br/>
         <b>Gutters:</b>
          The gutter is the space between columns that separ
         ates elements and content from different 
         columns. Gutter widths are fixed values but can change
          based on different breakpoints. For example, wider gutters are appropriate for larger screens,
           whereas s
          maller gutters are appropriate for smaller screens like mobile.
        `,
      },
      {
        img: img2,
        title: `
       Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.`,
        descOne: `<b> Examples of Grids in Use</b>
        `,
        descTwo: `<b>Example 1: Hierarchical Grid </b>
        <br />
        Our first example is from The 
        New York Times. This screen utilizes a hierarchical grid to create a ne
        wspaper-like reading experience. At desktop screen size, two main co
        lumns make up the hierarchical grid. The
         most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, 
         which take up the smaller column and modules on the right.  `,
      },
      {
        img: img3,
        title: `
        The New York Times uses a hie
        rarchical grid to achieve its newspaper
        -like reading experience. (We highlighted the col
        umns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 2: Column Grid </b>
        `,
        descTwo: `Our second example is from 
        <u>Ritual.com</u>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this scree
    
        n size, four consistently sized columns make up the grid structure and elements are aligned to and within
         these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visuall
        y separate the different products. The margins are independently sized and are the same between the left and right sides.
        `,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img5,
        title: `
    Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 4: Breaking the Grid </b>
        `,
        descTwo: `Our last example is <u>Shrine from Google’s Material Studies </u>.
         This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It
         is okay to break the grid every so often, as long as you have a valid reason for it.`,
      },
      {
        img: img4,
        title: `
    Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Example 3: Modular Grid </b>
        `,
        descTwo: `Our third example is from  <u>Behance</u>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and ri
        ght of the design. Like in previous example, the gutters visually separate each element.`,
      },
      {
        img: img6,
        title: `
    Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
      `,
        descOne: ` <b>Benefits of the Grid</b>
        <br />
        Using a grid benefits both end users and the designers alike:
        `,
        descTwo: `
        <ul class="list-disc ml-4">
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, 
        a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
        `,
      },
      {
        img: img7,
        title: `At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).
      `,
        descOne: ` Even more importantly, 
        the grid is not a throw-away concept. 
        It is used by both designers and developers alike.
         Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
        `,
        descTwo: `
       <div>

       <h3 class="font-bold">Choosing and Setting Up Your Grid </h3> 
       <p> How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

        <p> <b>Spend time setting up your grid.</b> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. 
        For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>
       <p> <b>Choose the right grid for your needs </b> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases.
        Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
       
        </div>
        `,
      },
      {
        img: img8,
        title: `Easily set the number of columns, the gutter size, and margin size in Figma..
      `,
        descOne: `
        <p>
        <b> Always place content within columns, not gutters.</b>
         The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements. 
        </p>
        `,
        descTwo: `
      
        `,
      },
      {
        img: img9,
        title: `Content or elements should be placed within and across columns, not gutters.
      `,
        descOne: `
        <p>
        <b> Consider using an 8px grid system.</b>
          For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. 
        </p>
        `,
        descTwo: `
        `,
      },
    ],
  },
];
