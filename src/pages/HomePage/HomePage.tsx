import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HeaderComponent />

        <IonTitle className="ion-padding ion-text-center" color={"medium"}>
          Darreres feines...
        </IonTitle>
        <IonCard>
          <IonCardTitle className="card-title-home">Cuina</IonCardTitle>
          <IonCardContent>
            <p>Client/a: Charo</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardTitle className="card-title-home">Avingudes</IonCardTitle>
          <IonCardContent>
            <p>Client/a: Pliar</p>
          </IonCardContent>
        </IonCard>
        <IonTitle className="ion-padding ion-text-center" color={"medium"}>
          Darrers jornals...
        </IonTitle>
        <IonCard>
          <IonCardTitle className="card-title-home">Cuina</IonCardTitle>
          <IonCardContent>
            <p>Client/a: Charo</p>
            <p>Data: 15/05/2022</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardTitle className="card-title-home">Avingudes</IonCardTitle>
          <IonCardContent>
            <p>Client/a: Pliar</p>
            <p>Data: 15/05/2022</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
