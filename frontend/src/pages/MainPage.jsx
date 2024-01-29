import cookie from 'js-cookie'; // cookie parser
import { useEffect, useContext } from 'react';
import { UserContext } from '../../contex/UserContexProvider';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const { hasToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleIfUserHasToken = () => {
    console.log('handleIfUserHasToken aufgerufen');
    // folgendes würde undefines zurückgeben, da das JWT Cookie "httpOnly" ist
    // const JWTcookie = cookie.get("JWT");

    // 1. Wert von JWTinfo Cookie auslesen und den darin enthaltenen JSON-String parsen
    let JWTinfocookie = cookie.get('JWTinfo');

    console.log('JWTinfo cookie', JWTinfocookie); // => j:{"expires":"2024-01-25T09:26:05.444Z","email":"Anna@dci.org"}
    if (!JWTinfocookie) return;

    // ":j" aus dem String in JWTinfo cookie entfernen und String parsen
    JWTinfocookie = JWTinfocookie.replace('j:', '');
    const cookieValueObj = JSON.parse(JWTinfocookie);
    console.log('cookieValueObj', cookieValueObj);

    // 2. Ist das Token schon abgelaufen
    // bzw. wie lange ist es noch gültig (zeitlich betrachtet)?
    const expirationInMs = new Date(cookieValueObj.expires) - new Date();
    console.log('JWT läuft ab in', expirationInMs / 1000, 'Sekunden');

    if (expirationInMs <= 0) return;
  };

  useEffect(() => {
    handleIfUserHasToken();
    if (!hasToken) {
      navigate('/');
    }
  }, []);

  return hasToken && <div>MainPage</div>;
};

export default MainPage;
