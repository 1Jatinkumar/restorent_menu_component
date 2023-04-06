import { useState } from "react";
import Title from "./Title";
import menu from './data'
import Menu from "./Menu";
import Nav from "./Nav";

const allCategories = ['all', ...new Set(menu.map(item=>item.category))]

const App = () => {
  const [ menuItem, setMenuItem]= useState(menu);
  const [categories, setCategories] = useState(allCategories)

  const course=(courseItem)=>{
    if(courseItem==='all'){
      setMenuItem(menu);
    }else{
      const newMenu= menu.filter((item)=>{return item.category===courseItem});
      setMenuItem(newMenu);
    }
  }

  return (
    <main>
      <section className="menu">
        <Title text="our Menu" />
        <Nav items={menu} course={course} />
        <Menu items= {menuItem} />
      </section>
    </main>
  );
};
export default App;
