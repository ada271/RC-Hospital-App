import React, { useState } from "react";
import uuid from "react-uuid";

const HastaEkle = ({ hastalar, setHastalar }) => {
    const [hastaName, setHastaName] = useState("");
    const [hastaTarih, setTarih] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //direkt submit yapma once alttaki kodlara bak
        setHastalar([
            ...hastalar,
            {
                id: uuid(),
                text: hastaName,
                day: hastaTarih,
                isDone: false,
                myDoctor: "DR Ipek Bilir",
            },
        ]);
        // setHastalar a gidildiğinde hemen altta console.log varsa çalışıverir ve biz useState nin yaptığı işi göremeyiz. bunun için log bu submit fonksiyonunun dışında olmalı.
        setHastaName("")
        setTarih("")
        // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={isim} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="formControl">
                    <label htmlFor="text">Hasta Bilgileri</label>
                    <input
                        type="text"
                        id="text"
                        onChange={(e) => setHastaName(e.target.value)}
                    />
                </div>

                <div className="formControl">
                    <label htmlFor="day">Day & Time</label>
                    <input
                        type="datetime-local"
                        id="day"
                        onChange={(e) => setTarih(e.target.value)}
                    />
                </div>

                <button type="submit" className="kayit">
                    <span style={{ color: "#6a0707" }}>dr adi</span> icin kayit
                    olustur
                </button>
            </form>
        </div>
    );
};

export default HastaEkle;
