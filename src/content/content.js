import React from "react";

export default function ContentDoc() {
    const array = ['one', 'two', 'three', 'forur', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

    return(
        array.map((item)=>{
            return(
        <div className='roots'>
            <div id={item}>
                <h1>{item}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit id dictum iaculis fermentum feugiat venenatis mauris,consequat tellus ut lobortis blandit himenaeos mattis nisi est magnis sapien aptent. Sollicitudin augue suspendissedapibus non aliquet sodales accumsan nulla, porttitor ultricies molestie odio faucibus eget hendrerit tellus inceptos, massa risus torquent vitae erat maximus semper. Venenatis fames mattis semper tincidunt per eros finibusnon morbi pulvinar montes volutpat. Luctus lacinia porttitor natoque semper eleifend varius est id tincidunt quam, risus lobortis sit condimentum donec justo vel aptent ultrices augue, convallis maecenas quisque nisi ligula commodo pulvinar pretium nibh. Dis aliquet venenatis sit finibus commodo scelerisque lorem senectus, aenean id consectetur ut proin porta. Dignissim nullam maximus phasellus potenti consectetur sollicitudin quam elit feugiat, montes neque dictumst enim lectus maecenas aenean tincidunt odio ipsum, tempus magna finibus interdum consequat tristique hac porttitor.</p>
            </div>
        </div>
        )})

    )
}




