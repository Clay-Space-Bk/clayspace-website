"use client";
import { useState } from "react";

/* --------------------------------------------------------------------------
   Mailing list signup.

   The live site puts this on nearly every page — it's how registration windows
   and events get announced. Sits in the shared footer so it's everywhere.

   No backend yet: submitting shows a confirmation rather than subscribing.
   The live site runs this through EmailOctopus.
   -------------------------------------------------------------------------- */

const ClayMailingList = () => {
    const [sent, setSent] = useState(false);

    return (
        <div className="cs-mailing">
            <div className="cs-mailing-copy">
                <h4>Join our mailing list</h4>
                <p>
                    Be first to hear about registration windows, workshops and events.
                </p>
            </div>

            {sent ? (
                <p className="cs-mailing-done" role="status">
                    Thanks — you&rsquo;re on the list. Watch your inbox for the next registration window.
                </p>
            ) : (
                <form
                    className="cs-mailing-form"
                    onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                >
                    <label className="cs-visually-hidden" htmlFor="cs-mailing-email">Email address</label>
                    <input
                        id="cs-mailing-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        autoComplete="email"
                    />
                    <button type="submit">Sign up</button>
                </form>
            )}
        </div>
    );
};

export default ClayMailingList;
