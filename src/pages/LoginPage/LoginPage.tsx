import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import corburLogo from "../../../resources/CORBUR (2).jpg";

import "./styles.css";
import { useState } from "react";
import { loginService } from "../../service";

const LoginPage: React.FC = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");

  console.log(inputUser);
  console.log(inputPassword);

  const handleSendUser = async () => {
    try {
      setError("");
      await loginService(inputUser, inputPassword);
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard id="section-login">
          <IonImg src={corburLogo} alt="logo-Corbur" />
          <IonInput
            label="Usuari"
            labelPlacement="floating"
            fill="outline"
            onIonChange={(e) => setInputUser(e.detail.value!)}
          ></IonInput>
          <IonInput
            label="Contrasenya"
            labelPlacement="floating"
            fill="outline"
            onIonChange={(e) => setInputPassword(e.detail.value!)}
          ></IonInput>
          {error && <p color="danger">{error}</p>}
          <IonButton fill="outline" onClick={handleSendUser}>
            Endevant siau!
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
