import HeaderDoc from "../header/header";
import MenuDoc from "../menu/menu";
import ContentDoc from "../content/content";

export default function Index() {

  return (
      <div className="index">

          <HeaderDoc />

          <MenuDoc />

          <ContentDoc />
        
      </div>
  );
}