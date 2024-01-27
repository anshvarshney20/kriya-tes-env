import Helmet from "react-helmet";

export default function Helmets() {
    return (
        <>
           <div id="getWaitlistContainer" data-waitlist_id="13270" data-widget_type="WIDGET_1"></div>
            <Helmet>
            <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
<script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
            </Helmet>
        </>
    );
}
