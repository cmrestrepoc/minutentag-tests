
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Rating } from "./components/Rating";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { products } from "./utils/products";
import { imagesArray } from "./utils/images";

import './App.css';

export default function App() {
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <br />
      <h3>'Grocery' test</h3>
      <Grocery products={products}/>
      <br />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={imagesArray}/>
      <br />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <br />
      <br />
      <h3>'Rating' test</h3>
      <Rating />
      <br />
      <br />
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation />
      <br />
      <br />
    </div>
  );
}
