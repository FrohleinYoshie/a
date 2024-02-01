import React, { useEffect, useState } from 'react';
import './App.css';

const Rectangle = ({ data }) => {
  const isOdaNobunaga = data.id === '1';
  const isUesugiKenshin = data.id === '2';
  const isTakedaShingen = data.id === '3';
  const isShimazuYoshihisa = data.id === '4';
  const isOtomoSorin = data.id === '5';
  const isRyuzoujiTakanobu = data.id === '6';
  const isChosokabeMotonari = data.id === '7';
  const isMiyoshiNagayoshi = data.id === '8';
  const isMoriMotochika = data.id === '9';
  const isTokugawaIeyasu = data.id === '10';
  const isNanbuHarumasa = data.id === '11';
  const isDateMasamune = data.id === '12';
  const isMogamiYoshiaki = data.id === '13';
  const isUesugiKagekatsu = data.id === '14';
  const isHojoUjimasa = data.id === '14';
  const isImagawaYoshimoto = data.id === '15';
  const isOdaNobuhime = data.id === '16';
  const isAmagoTunehisa = data.id === '17';
  const isAsakuraYoshikage = data.id === '18';
  const isAsaiNagamasa = data.id === '19';
  const isToyotomiHideyoshi = data.id === '20';

  return (
    <div className='pokemonCardContainer'>
      <div className='diamond'>
      <h3>名前: {data.names}</h3>
      <h3>出生地: {data.country}</h3>
      <h3>享年: {data.age}</h3>
      <h3>二つ名: {data.Nickname}</h3>
      </div>
      {isOdaNobunaga && (
        <div className='mapContainer'>
          <iframe
            title={`Google Maps - 織田信長`}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6524.081279763827!2d136.13059637771!3d35.155607200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60017f26ac6d6281%3A0xc404f8cdecd0acd9!2z5a6J5Zyf5Z-OIOacrOS4uOi3oQ!5e0!3m2!1sja!2sjp!4v1706267099833!5m2!1sja!2sjp`}
            width="100%"
            height="250px"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
      {isUesugiKenshin && (
        <div className='mapContainer'>
          <iframe
            title={`Google Maps - 上杉謙信`}
            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25441.971989588943!2d138.18509427090532!3d37.146837875434734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff679ddaa3a373f%3A0x53f56cefa21e1597!2z5pil5pel5bGx5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706278497468!5m2!1sja!2sjp"}
            width="100%"
            height="250px"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
      {isTakedaShingen && (
        <div className='mapContainer'>
          <iframe
            title={`Google Maps - 武田信玄`}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.475466164985!2d138.56859752515066!3d35.66529293085042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601bf9cef972d887%3A0xcccf81ee6b1de81b!2z55Sy5bqc5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706268676063!5m2!1sja!2sjp`}
            width="100%"
            height="250px"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
      {isShimazuYoshihisa && (
        <div className='mapContainer'>
          <iframe
            title={`Google Maps - 島津義久`}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3752246390895!2d130.36038087496505!3d31.513852747465155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e6d89a7a5c15f%3A0x395086df02ca32cf!2z5LyK5L2c5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706268943438!5m2!1sja!2sjp`}
            width="100%"
            height="250px"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
      {isOtomoSorin && (
        <div className='mapContainer'>
          <iframe
            title={`Google Maps - 大友宗麟`}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.523283647282!2d131.79861758885497!3d33.12161459999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546847c42ba8777%3A0x6d9893c742361138!2z6Ie85p215Z-O6LehKOecjOaMh-WumuWPsui3oSk!5e0!3m2!1sja!2sjp!4v1706269069702!5m2!1sja!2sjp`}
            width="100%"
            height="250px"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
        {isRyuzoujiTakanobu && (
    <div className='mapContainer'>
      <iframe
        title={`Google Maps - 龍造寺隆信`}
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.299844849549!2d130.1014746750368!3d33.18000356328379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35402ef621ce0c5f%3A0x591ccb4089d5da93!2z6aCI5Y-k5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706269208803!5m2!1sja!2sjp`}
        width="100%"
        height="250px"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )}
        {isChosokabeMotonari && (
    <div className='mapContainer'>
      <iframe
        title={`Google Maps - 長宗我部元親`}
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.3979412449744!2d133.61997737505536!3d33.59497794173786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354e1d435ab6c571%3A0x3c259e5b31827d2e!2z5bKh6LGK5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706269312400!5m2!1sja!2sjp`}
        width="100%"
        height="250px"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )}
        {isMiyoshiNagayoshi && (
    <div className='mapContainer'>
      <iframe
        title={`Google Maps - 三好長慶`}
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26184.204883793165!2d135.55228071083985!3d34.88070319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fd17f1719ecd%3A0x226ffa10e22e92c!2z6Iql5bed5Z-O6Leh77yI6Iql5bed5bGx5Z-OIOacrOS4uOi3oe-8iQ!5e0!3m2!1sja!2sjp!4v1706269362685!5m2!1sja!2sjp`}
        width="100%"
        height="250px"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )}
        {isMoriMotochika && (
    <div className='mapContainer'>
      <iframe
        title={`Google Maps - 毛利元就`}
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1171597664115!2d135.774645188855!3d34.65174400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013aed3da294a1%3A0x37f3cdeb384b2c40!2z6YOh5bGx5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706269420817!5m2!1sja!2sjp`}
        width="100%"
        height="250px"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )}
        {isTokugawaIeyasu && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 徳川家康`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.0023844845323!2d137.15623592511756!3d34.9565489194433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004bd343a9aaaab%3A0xa7eccc723976e60!2z5bKh5bSO5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706269492464!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isNanbuHarumasa && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 南部晴政`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.770541112436!2d141.26481197539007!3d40.41393375581056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b344af5ce817b%3A0xce506a42c893bcc4!2z5Y-y6Leh6IGW5a-_5a-66aSo6Leh5qGI5YaF5omA!5e0!3m2!1sja!2sjp!4v1706269605705!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isDateMasamune && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 伊達政宗`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6266.1760535611675!2d140.8509148424201!3d38.25426441254232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8987638b2cac17%3A0xa59e332f2ed25ca1!2z5LuZ5Y-w5Z-O6LehICjpnZLokYnln47lnYAp!5e0!3m2!1sja!2sjp!4v1706269657114!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isMogamiYoshiaki && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 最上義光`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1566.5167840233312!2d140.32551664442752!3d38.2555275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb6196c13627d%3A0xdbb1b85ad13bff68!2z5bGx5b2i5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706269701394!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isHojoUjimasa && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 北条早雲`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.1234416862826!2d138.95300327512217!3d35.05365276419433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601993f74ace72bf%3A0x4abafed64f5e569f!2z6Z-u5bGx5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706269796268!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isImagawaYoshimoto && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 今川義元`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.0955013622156!2d138.38043127511858!3d34.97927251821605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a4a1944545985%3A0xf6c10c448eb90749!2z6ae_5bqc5Z-O5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1706269850964!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isOdaNobuhime && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 小田氏治`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6014585255!2d140.10786877517398!3d36.15191600397585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60220ed7651e964d%3A0xf42d25fabebb6abd!2z5bCP55Sw5Z-O6LehIOmBuuani-W-qeWFg-W6g-WgtA!5e0!3m2!1sja!2sjp!4v1706269894427!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isAmagoTunehisa && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 尼子経久`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.738768316267!2d133.18174222513647!3d35.36212884743832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3556e290bc492dd5%3A0x67cbe74050a3d062!2z5pyI5bGx5a-M55Sw5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706269945548!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isAsakuraYoshikage && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 朝倉義景`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6455.7055859824895!2d136.2869199777099!3d35.99946330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8a4a9c8e8dbb3%3A0x708f90dd2e348a85!2z5LiA5LmX6LC35pyd5YCJ5rCP6YG66Leh!5e0!3m2!1sja!2sjp!4v1706269987542!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isAsaiNagamasa && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 浅井長政`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415976.3985967306!2d135.70029397343748!3d35.45935899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002267b40cb0b35%3A0x353e3abe89305739!2z5bCP6LC35Z-O6Leh!5e0!3m2!1sja!2sjp!4v1706270136731!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
        {isToyotomiHideyoshi && (
    <div className='mapContainer'>
      <iframe
          title={`Google Maps - 豊臣秀吉`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6561.420860701076!2d135.51684237770996!3d34.6872571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0cd5c283afd%3A0xf01d07d5ca11e41!2z5aSn6Ziq5Z-O!5e0!3m2!1sja!2sjp!4v1706270174493!5m2!1sja!2sjp`}
          width="100%"
          height="250px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )}
    </div>
  );
};





const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/vsk03jg8wh2c5');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='centerContainer'>
              <h1 className="umebana">戦国武将一覧</h1>
      <div className='a'>
      </div>
      {data.map((item) => (
        <Rectangle key={item.id} data={item} />
      ))}
    </div>
  );
};

export default App;
