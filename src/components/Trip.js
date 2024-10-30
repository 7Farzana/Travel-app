import TripData from "./TripData";
import "./TripStyle.css";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <div className="tripcard">
        <TripData
          image="https://hblimg.mmtcdn.com/content/hubble/img/Bulk_International/mmt/activities/m_Frankfurt_5-min_l_500_1000.jpg"
          heading="✈ Frankfurt"
          text="Located in Germany’s Hesse state, Frankfurt acts
           as an industrial, financial and transportation hub.
            The city has many green spaces, trendy clubs and
             innovative bars and is known for its high-rise buildings."
        />
        <TripData
          image="https://hblimg.mmtcdn.com/content/hubble/img/countryimgs/mmt/destination/m_Oman_country_images_5_l_630_945.jpg"
          heading="✈ Oman"
          text="Nestled on the South-eastern coast of the Arabian Peninsula,
           Oman, is a sultanate known for its natural beauty,
            distinct culture, rich history, and warm hospitality.
             Oman encompasses a multitude of singular provinces."
        />
        <TripData
          image="https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Singapore_destjulimg_2_l_583_1037.jpg"
          heading="✈ Singapore"
          text="A melting pot of cultures, Singapore is a
           cosmopolitan city with a vibrant shopping, food,
            entertainment and nightlife scene. It is also deep-rooted
             in history and tradition, this is a good place to travel."
        />
      </div>
    </div>
  );
}

export default Trip;
