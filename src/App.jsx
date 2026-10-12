import React from "react";
import Navigation from "./component/Navigation";
import Menu from "./component/Menu";
import Story from "./component/Story";
import Special from "./component/Special";
import Table from "./component/Table";
import Chefs from "./component/Chefs";
import Latest from "./component/Latest";
import Footer from "./component/Footer";

const logo="./Images/Illustration/main_logo.png";
const links=["HOME","ABOUT US","OFFER","MENU","TEAM","BLOG","GALLERY","MENU"]
const navBtn="bi bi-search";
const navlist="bi bi-list";

const heroheading ="Welcome to";
const heroheading2=" DAWAT CAFE AND RESTAURANT";
const heroBtn="Reservation Now";

const storyheading="Our Story";
const storypara="enc non elit libero. Quisque massa porta ut placerat lentesque non diam. Nam convallis porta rhoncus. Maecenas varius eget turpis suscipit porta sapien tinc Mauris tempor libero fringilla orci vivrra faucibue fringilla orci vivrra faucibus. Integer ullamcorper erat in tellus efficitur, quis porta sapien tincidunt. Nunc mattis lectus sed semper semper.";
const storypara2="Quisque sit amet turpis et ipsum elementum facilisis. Quisque sed placerat libero. Pellentesque nec tellus sollicitudin, sollicitudin ligula non, tristique nibh Donec vitae turpis sagittis, cursus nunc ac, aliquet nunc. Donec viverra vel massa at posuere. Aliquam et fringilla augue consequat posuere sem, eu ornares viverra veleso massa at posuere. Aliquam et fringilla augue";
const storyimg="./Images/Illustration/story.png";

const specialheading="Special Package";
const specialimg="./Images/Illustration/special image.jpg";
const specialoffer="40% off for 9-12 pizza - Wed,Thu,Friday only";
const specialpara="Pizza 12 inch+1 Side Dish+1,L Coke Bottle Only From 209,00";
const specialBtn="ORDER NOW";

const menuheading="Today’s menu";
const menulist=[
    {
        menulistname:"ALL"
    },
    {
        menulistname:"BREAKFAST"
    },
    {
        menulistname:"LUNCH"
    },
    {
        menulistname:"DINNER"
    },
    {
        menulistname:"COFFEE"
    },
    {
        menulistname:"SNACK"
    }
]
const menudata=[
    {
        foodimg:"./Images/Illustration/imgi_7_menu_1.jpg",
        foodheading:"Cupcake Recipes",
        fooditems:["-Juice Fruit","- Vegetable","- Tomato","- Checken","- Milk" ,"- Chilli"," - Cherry"," - Potato"," - Sesame"],
        foodprice:"$20.00"
    },
     {
        foodimg:"./Images/Illustration/imgi_8_menu_2.jpg",
        foodheading:"Cupcake Recipes",
        fooditems:["-Juice Fruit","- Vegetable","- Tomato","- Checken","- Milk" ,"- Chilli"," - Cherry"," - Potato"," - Sesame"],
        foodprice:"$20.00"
    },
     {
        foodimg:"./Images/Illustration/imgi_9_menu_3.jpg",
        foodheading:"Cupcake Recipes",
        fooditems:["-Juice Fruit","- Vegetable","- Tomato","- Checken","- Milk" ,"- Chilli"," - Cherry"," - Potato"," - Sesame"],
        foodprice:"$20.00"
    },
     {
        foodimg:"./Images/Illustration/imgi_10_menu_4.jpg",
        foodheading:"Cupcake Recipes",
        fooditems:["-Juice Fruit","- Vegetable","- Tomato","- Checken","- Milk" ,"- Chilli"," - Cherry"," - Potato"," - Sesame"],
        foodprice:"$20.00"
    },
     {
       foodimg:"./Images/Illustration/imgi_11_menu_5.jpg",
        foodheading:"Cupcake Recipes",
        fooditems:["-Juice Fruit","- Vegetable","- Tomato","- Checken","- Milk" ,"- Chilli"," - Cherry"," - Potato"," - Sesame"],
        foodprice:"$20.00"
    },
     {
        foodimg:"./Images/Illustration/imgi_12_menu_6.jpg",
        foodheading:"Cupcake Recipes",
        fooditems:["-Juice Fruit","- Vegetable","- Tomato","- Checken","- Milk" ,"- Chilli"," - Cherry"," - Potato"," - Sesame"],
        foodprice:"$20.00"
    }
];


const tableheading="BOOK A TABLE NOW";
const tableBtn="BOOK NOW !";

const chefsheading="Our Chefs";
const chefdata=[
    {
        chefimg:"./Images/Illustration/chef1.jpg",
        chefname:"Mark Angelila",
        chefinfo:"cras senunc massa quisque tempor dolor sit amet",
    },
    {
        chefimg:"./Images/Illustration/chef3.jpg",
        chefname:"John Doe",
        chefinfo:"cras senunc massa quisque tempor dolor sit amet",
    },
    {
        chefimg:"./Images/Illustration/chef4.jpg",
        chefname:"Angel Di Maria",
        chefinfo:"cras senunc massa quisque tempor dolor sit amet",
    },
    {
        chefimg:"./Images/Illustration/chef5.jpg",
        chefname:"Park Ji Sung",
        chefinfo:"cras senunc massa quisque tempor dolor sit amet"
    }
]
 
const Latestheading="Latest News";
const LatestData=[
    {
        newsimg:"./Images/Illustration/latest1.jpg",
        newsheading:"Restaurant welcome day eetup",
        newspara:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptatum maxime delectus fugit natus iusto rerum esse non. Quam praesentium ratione nostrum voluptatum ex ab architecto ducimus libero, natus earum.",
        newsdate:"24 February,2017",
        newscomment:"- 5 Comments",
    },
    {
        newsimg:"./Images/Illustration/latest2.jpg",
        newsheading:"Received first day first reservation",
        newspara:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptatum maxime delectus fugit natus iusto rerum esse non. Quam praesentium ratione nostrum voluptatum ex ab architecto ducimus libero, natus earum.",
        newsdate:"24 February,2017",
        newscomment:"- 5 Comments",
    },
    {
        newsimg:"./Images/Illustration/latest3.jpg",
        newsheading:"Home to get your home delivery",
        newspara:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptatum maxime delectus fugit natus iusto rerum esse non. Quam praesentium ratione nostrum voluptatum ex ab architecto ducimus libero, natus earum.",
        newsdate:"24 February,2017",
        newscomment:"- 5 Comments",
    }
];

const Footerlogo="./Images/Illustration/main_logo.png";
const Footeraddress="20, floor, Queenslad Victoria Building. 60 california street california USA";
const Footermail="hello@dawat.com";
const footertel="8888888888";

const footerlinks="Terms Of Use , Privacy Policy , SiteMap , Contact";
const footertext="© 2017 Dawat Restaurant All Right Reserved.";





 const App=()=>{
    return(
        <React.Fragment>
            <Navigation logo={logo} links={links} navBtn={navBtn} heroheading={heroheading} heroBtn={heroBtn} heroheading2={heroheading2} navlist={navlist} />
            <Story storyheading={storyheading} storypara={storypara} storypara2={storypara2} storyimg={storyimg}/>
            <Special specialoffer={specialoffer} specialpara={specialpara} specialBtn={specialBtn} specialheading={specialheading} specialimg={specialimg}/>
            <Menu menuheading={menuheading} menulist={menulist} menudata={menudata} />
            <Table tableheading={tableheading} tableBtn={tableBtn} />
            <Chefs chefsheading={chefsheading} chefdata={chefdata}/>
            <Latest Latestheading={Latestheading} LatestData={LatestData}/>
            <Footer Footerlogo={Footerlogo} Footeraddress={Footeraddress} Footermail={Footermail} footertel={footertel} footerlinks={footerlinks} footertext={footertext}/>
        </React.Fragment>
    );
}

export default App;