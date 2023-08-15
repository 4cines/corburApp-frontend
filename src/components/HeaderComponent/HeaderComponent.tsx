import { IonHeader, IonImg, IonItem } from "@ionic/react";
import corbuLogo from "../../../resources/CORBUR (2).jpg";
import "./styles.css";

// interface ContainerProps {
//   name: string;
// }

const HeaderComponent: React.FC = () => {
  return (
    <IonHeader id="section-logo">
      <IonImg id="logo" src={corbuLogo} alt="logo-Corbur" />
    </IonHeader>
  );
};

export default HeaderComponent;
