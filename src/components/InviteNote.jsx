import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. S.M. Sayeed Pasha</h2>
                <h5 className="address mb-3">
                    Jamkhanwadi, Near Gullu Hussaini Saheb Dargah,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> Andhra Pradesh - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 89878 99920.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
