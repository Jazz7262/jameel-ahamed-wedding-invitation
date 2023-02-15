import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        // <section id="timeline">
        //     <div className="single-timeline">
        //         <h1 className="inshaallaah">Inshaallaah ...</h1>

        //         <div
        //             className="wrapper"
        //             data-aos="fade-up"
        //             data-aos-delay="100"
        //         >
        //             <div className="content">
        //                 <h1>Nikaah</h1>
        //                 <p>
        //                     On Friday, 3<sup>rd</sup> February, 2023,
        //                     <br />
        //                     11<sup>th</sup> Rajab-ul-Murajjab, 1444 Hijri,
        //                     <br />
        //                     Time: 07:30 PM.
        //                 </p>
        //                 <h2>Venue:</h2>
        //                 <p>
        //                     Farhan Khan Hall,
        //                     <br /> Millat Nagar,
        //                     <br /> Bhiwandi.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section id="timeline">
            <div className="multi-timeline">
                <h1 className="inshaallaah">Inshaallaah ...</h1>
                <div className="wrapper">
                    {/* <div className="row">
                        <div className="col-lg-6 left" data-aos="fade-down">
                            <h1>Shukrana</h1>
                            <p>
                                On Wednesday, 22<sup>nd</sup> February, 2023.
                                <br />1<sup>st</sup> Rajab-ul-Murajjab, 1444
                                Hijri,
                                <br />
                                Time: 09:00 PM.
                            </p>
                        </div>
                        <div
                            className="col-lg-6 right"
                            data-aos="fade-down"
                        ></div>
                    </div> */}
                    <div className="row">
                        <div
                            className="col-lg-6 left next"
                            data-aos="fade-down"
                            data-aos-offset="200"
                        ></div>
                        <div
                            className="col-lg-6 right next"
                            data-aos="fade-down"
                            data-aos-offset="200"
                        >
                            <h1>Nikaah</h1>
                            <p>
                                On Friday, 17<sup>th</sup> February, 2023,
                                <br />
                                26<sup>th</sup> Rajab-ul-Murajjab, 1444 Hijri,
                                <br />
                                <strong>Nikaah At:</strong> Sultanpur Masjid,
                                Adoni,
                                <br />
                                After Namaaz -e- Asr,
                                <br />
                                Time: 05:30 PM.
                            </p>

                            <h2>Dinner Follows:</h2>
                            <p>
                                Danish Function Hall,
                                <br /> Bypass Road,
                                <br /> Adoni.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-6 left next"
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="100"
                        >
                            <h1>Valima</h1>

                            <p>
                                On Saturday, 18<sup>th</sup> February, 2023,
                                <br />
                                27<sup>th</sup> Rajab-ul-Murajjab, 1444 Hijri,
                                <br />
                                Time: 02:00 PM.
                            </p>

                            <h2>Venue:</h2>
                            <p>
                                Danish Function Hall,
                                <br /> Bypass Road,
                                <br /> Adoni.
                            </p>
                        </div>
                        <div
                            className="col-lg-6 right next"
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="100"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
