import React from 'react'

const App = () => {

    const data= [{"title": "Overview", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem dolores voluptatibus pariatur perferendis, dolor impedit officiis. Neque est dolorum explicabo, totam corrupti aliquam illum mollitia vitae sit laborum dignissimos.", "image_Url": "https://image1.com", "more_description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem dolores voluptatibus pariatur perferendis, dolor impedit officiis. Neque est dolorum explicabo, totam corrupti aliquam illum mollitia vitae sit laborum dignissimos.", "status":true},
                {"title": "Details", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem dolores voluptatibus pariatur perferendis, dolor impedit officiis. Neque est dolorum explicabo, totam corrupti aliquam illum mollitia vitae sit laborum dignissimos.", "image_Url": "https://image2.com", "more_description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem dolores voluptatibus pariatur perferendis, dolor impedit officiis. Neque est dolorum explicabo, totam corrupti aliquam illum mollitia vitae sit laborum dignissimos.", "status":false},
                {"title": "More info", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem dolores voluptatibus pariatur perferendis, dolor impedit officiis. Neque est dolorum explicabo, totam corrupti aliquam illum mollitia vitae sit laborum dignissimos.", "image_Url": "https://image3.com", "more_description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem dolores voluptatibus pariatur perferendis, dolor impedit officiis. Neque est dolorum explicabo, totam corrupti aliquam illum mollitia vitae sit laborum dignissimos.", "status":false},
                {"title": "Other", "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem dolores voluptatibus pariatur perferendis, dolor impedit officiis. Neque est dolorum explicabo, totam corrupti aliquam illum mollitia vitae sit laborum dignissimos.", "image_Url": "https://image4.com", "more_description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem dolores voluptatibus pariatur perferendis, dolor impedit officiis. Neque est dolorum explicabo, totam corrupti aliquam illum mollitia vitae sit laborum dignissimos.", "status":false}
            ]

    // const [modalStatus, setModalStatus]= useState(false);

    const handleModal= (cardStatus)=>{
        let currCardStatus= cardStatus;

    };

  return (
    <>
        <div className="heading">
            <h1>Accordion</h1>
        </div>

        {data && data.map((idx,card)=>{
            return <>
                        <div className="card">
                            <div className="head">
                                <h1>Section {idx+1}: {card.title}</h1>
                                <span className='closed' onClick={handleModal(false)}>-</span>
                                <span className='opened' onClick={handleModal(true)}>+</span>
                            </div>
                            <div className="visible-card">
                                    <div className="description-img">
                                    <div className="text">
                                        <p>{card.description}</p>
                                    </div>
                                    <div className="image">
                                        <img src={card.img} alt="card img"/>
                                    </div>
                                    </div>
                                    <div className="more-description">
                                        <p>{card.more_description}</p>
                                    </div>
                            </div>
                        </div>
                    </>
        })}
    </>
  )
}

export default App;