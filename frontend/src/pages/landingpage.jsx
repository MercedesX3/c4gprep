import { Link } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
    const [hover, setHover] = useState(null);

    return (
        <div>
          {hover !== null ? <div></div> : <div></div>}
    
          <div id="body" className="px-5 py-5">
            <div className="grid grid-cols-4 grid-rows-2 gap-5 px-10">
              <div className="bg-secondary-blue py-20">01</div>
              <div className="bg-secondary-blue py-20">01</div>
              <div className="bg-secondary-blue py-20">01</div>
              <div className="bg-secondary-blue py-20">01</div>
              <div className="bg-secondary-blue py-20">01</div>
              <div className="bg-secondary-blue py-20">01</div>
              <div className="bg-secondary-blue py-20">01</div>
              <div className="bg-secondary-blue py-20">01</div>
            </div>
    
            <div className="px-5 py-10 space-y-5">
              <h1>Trial</h1>
              <h1>Trial</h1>
              <h1>Trial</h1>
            </div>
    
            <div className="grid grid-cols-2 gap-x-26 px-60 py-5">
              <div className="space-y-5">
                <div className="bg-secondary-blue py-20">
                  Trial
                </div>
                <h1 className="text-left">01</h1>
                <h1 className="text-left">01</h1>
              </div>
    
              <div className="space-y-5">
                <div className="bg-secondary-blue py-20">
                  Trial
                </div>
                <h1 className="text-left">01</h1>
                <h1 className="text-left">01</h1>
              </div>
            </div>
          </div>
        </div>
      )
}