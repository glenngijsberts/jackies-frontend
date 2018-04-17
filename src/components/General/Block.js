import React from "react";

const Block = (props) => {

    return(
        <div className={props.stylename}>
            <div className="rounded overflow-hidden shadow-sm bg-white text-center">

                    {props.img &&

                    <div className="pt-8">
                        <img className="w-full img-responsive max-w-120 mx-auto" src={props.img} alt={props.title} />
                    </div>

                    }

                {/* <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                <div className="px-8 py-8">
                    <div className="font-bold text-lg text-brand text-center">
                        <h2 className="mb-0">{props.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Block;