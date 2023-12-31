import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from "mdb-react-ui-kit"
import React, { useState } from "react"
import renderGeoAPIUnavailable from "./geoAPIUnavail"
import renderLSUnavailable from "./lsUnavail"

export default function ResetSettings(props) {
    const [resetModal, setResetModal] = useState(false)
    const [streamerModal, setStreamerModal] = useState(false)
    const [lowPerfModal, setLowPerfModal] = useState(false)
    const [classicModal, setClassicModal] = useState(false)
    const [settingsMgr, setSettingsMgr] = useState(props.settingsMgr)

    const setResetModal_wrap = (value) => {
        if (value !== resetModal) {
            props.setSettingsModal(!value)
        }
        setResetModal(value)
    }

    const setStreamerModal_wrap = (value) => {
        if (value !== streamerModal) {
            props.setSettingsModal(!value)
        }
        setStreamerModal(value)
    }

    const setLowPerfModal_wrap = (value) => {
        if (value !== lowPerfModal) {
            props.setSettingsModal(!value)
        }

        setLowPerfModal(value)
    }

    const setClassicModal_wrap = (value) => {
        if (value !== classicModal) {
            props.setSettingsModal(!value)
        }
        setClassicModal(value)
    }

    const toggleResetModal = (noSettingsRelaunch) => {
        setTimeout(() => {
            document.getElementById("resetModalDialog").scrollIntoView()
        }, resetModal ? 250 : 5)
        setResetModal(!resetModal)
        if (noSettingsRelaunch !== true) {
            props.setSettingsModal(resetModal)
        }
    }
    const toggleStreamerModal = (noSettingsRelaunch) => {
        setTimeout(() => {
            document.getElementById("streamerModalDialog").scrollIntoView()
        }, streamerModal ? 250 : 5)
        setStreamerModal(!streamerModal)
        if (noSettingsRelaunch !== true) {
            props.setSettingsModal(streamerModal)
        }
    }

    const toggleLowPerfModal = (noSettingsRelaunch) => {
        setTimeout(() => {
            document.getElementById("lowPerfModalDialog").scrollIntoView()
        }, lowPerfModal ? 250 : 5)
        setLowPerfModal(!lowPerfModal)
        if (noSettingsRelaunch !== true) {
            props.setSettingsModal(lowPerfModal)
        }
    }

    const toggleClassicModal = (noSettingsRelaunch) => {
        setTimeout(() => {
            document.getElementById("classicModalDialog").scrollIntoView()
        }, classicModal ? 250 : 5)
        setClassicModal(!classicModal)
        if (noSettingsRelaunch !== true) {
            props.setSettingsModal(classicModal)
        }
    }

    const renderStreamerChromeField = () => {
        if (props.settingsMgr.is_chromium_browser()) {
            return (<li>The <b>Chrome map fix</b> is set to <b>On</b> so you don't see grey lines on the map since you're using a Chrome-based browser.</li>)
        } else {
            return ""
        }
    }

    return (
        <>
            {renderLSUnavailable(settingsMgr.ls_available)}
            {renderGeoAPIUnavailable(props.geoMetricsErrorState)}
            <h5>Reset settings to default</h5>
            <MDBBtn onClick={toggleResetModal} style={{ marginTop: "6px", marginBottom: "5px" }} title="Click to confirm if you want to reset settings to default">Reset settings to default</MDBBtn><br></br>
            <small>Resets all settings to their defaults.</small>
            <hr></hr>
            <h5>Optimize settings for live streaming</h5>
            <MDBBtn onClick={toggleStreamerModal} style={{ marginTop: "6px", marginBottom: "5px" }} title="Click to confirm if you want to reset settings to optimized for live streaming">Optimize settings for live streaming</MDBBtn><br></br>
            <small>Configure the tracker to settings optimized for live streaming.</small>
            <hr></hr>
            <h5>Optimize settings for low performance</h5>
            <MDBBtn onClick={toggleLowPerfModal} style={{ marginTop: "6px", marginBottom: "5px" }} title="Click to confirm if you want to reset settings to optimized for low performance">Optimize settings for low performance</MDBBtn><br></br>
            <small>Configure the tracker to settings optimized for devices with low performance, or to save battery power.</small>
            {/* <h5>Reset settings to OG tracker mode</h5>
            <MDBBtn onClick={toggleClassicModal} style={{ marginTop: "6px", marginBottom: "5px" }} title="Click to confirm if you want to reset settings to classic mode">Reset settings to OG tracker mode</MDBBtn><br></br>
            <small>track.easterbunny.cc has come a long way since our first year tracking in 2019. To celebrate the release of v6 and our fifth year of tracking, you can now reset the tracker to make it "look" like what it was back in 2019!</small> */}
            <MDBModal id="resetModal" appendToBody show={resetModal} setShow={setResetModal_wrap} tabIndex='-1'>
                <MDBModalDialog id="resetModalDialog">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Reset settings to default?</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleResetModal} title="Click to close this modal"></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            This will reset any customized tracker settings back to their defaults. This action can't be undone.<br></br><br></br>
                            If you're okay with this, click the confirm button. Otherwise, click the cancel button.
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleResetModal} title="Click to close this modal">
                                Close
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={() => {props.settingsMgr.set_defaults(); toggleResetModal(true); props.setActiveSettingsTab('tracker')}} title="Click to reset tracker settings to default">
                                Confirm
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBModal id="lowPerfModal" appendToBody show={lowPerfModal} setShow={setLowPerfModal_wrap} tabIndex='-1'>
                <MDBModalDialog id="lowPerfModalDialog">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Optimize settings for low performance?</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleLowPerfModal} title="Click to close this modal"></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            If you're experiencing poor tracker performance on your device (or want to save battery power on mobile devices), we provide a set of settings that can help improve the performance of the tracker at the expense of disabling some features.<br></br><br></br>
                           
                            If you're okay with these settings being changed, click on the confirm button. Otherwise, click on the cancel button.
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleLowPerfModal} title="Click to close this modal">
                                Cancel
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={() => {props.settingsMgr.set_lowperf(); toggleLowPerfModal(true); props.setActiveSettingsTab('tracker')}} title="Click to reset tracker settings to optimized for low performance">
                                Confirm
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBModal id="streamerModal" appendToBody show={streamerModal} setShow={setStreamerModal_wrap} tabIndex='-1'>
                <MDBModalDialog id="streamerModalDialog">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Optimize settings for live streaming?</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleStreamerModal} title="Click to close this modal"></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            When streaming santatracker.live we recommend running these settings.<br></br><br></br>Turning these settings on disables all location related settings so you don't accidentally leak your location.<br></br><br></br>
                            {/* <ul>
                                <li>The <b>Site appearance</b> is set to <b>Dark</b> and the <b>Map style</b> is set to <b>Hybrid</b>. This style is preferred by viewers.</li>
                                <li>The <b>Easter Bunny bouncing effect</b> is set to <b>On</b> as viewers prefer the bouncing effect.</li>
                                <li>The <b>Tracker smoothness</b> is set to <b>Smoothest</b>. Feel free to lower this if your machine lags on Smoothest.</li>
                                <li>The <b>Tracker units</b> is set to <b>Imperial</b>.</li>
                                { renderStreamerChromeField() }
                                <li>The <b>Easter Bunny estimated arrival time</b> is set to <b>Off</b> to protect your privacy on stream.</li>
                                <li><b>Your location accuracy</b> is set to <b>Approximate</b> to further preserve your privacy in case you show the distance from you metric on stream.</li>
                            </ul> */}
                            All remaining tracker settings are set to their defaults. To continue press confirm, to cancel press cancel. <br/><br/><strong>Remember:</strong> You can always reset your settings to revert back!
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleStreamerModal} title="Click to close this modal">
                                Cancel
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={() => {props.settingsMgr.set_streamer(); toggleStreamerModal(true); props.setActiveSettingsTab('tracker')}} title="Click to reset tracker settings to optimized for live streaming">
                                Confirm
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            {/* <MDBModal id="classicModal" appendToBody show={classicModal} setShow={setClassicModal_wrap} tabIndex='-1'>
                <MDBModalDialog id="classicModalDialog">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Want to go back in time?</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleClassicModal} title="Click to close this modal"></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            track.easterbunny.cc has evolved by quite a lot since 2019. If you joined us back in 2019 for our first year of tracking, or are just curious to see what the tracker "looked" like in 2019, we provide some default settings so you can you back in time! In short:<br></br><br></br>
                            <ul>
                                <li>The <b>Site appearance</b> is set to <b>Dark</b> and the <b>Map style</b> is set to <b>Hybrid</b> because that's what it was back in 2019.</li>
                                <li>The <b>Easter Bunny bouncing effect</b> is set to <b>Off</b>, because of course this was off for our first year.</li>
                                <li>The <b>Metric shown</b> is set to <b>Baskets delivered</b>, and don't try to use the arrows! That was the only metric available back in 2019, until 2021 when we introduced more metrics.</li>
                                <li>The <b>Tracker smoothness</b> is set to <b>Slowest</b>. This was the default smoothness setting from 2019 to 2022.</li>
                                <li>The <b>Zoom in on stop arrival</b> is set to <b>Off</b> because this feature was introduced this year!</li>
                                <li>The <b>Easter Bunny estimated arrival time</b> is set to <b>Off</b> because this feature was introduced in 2020!</li>
                                <li>The <b>Metrics in next stop box</b> is set to <b>Off</b>, this feature was introduced in 2021. 2021 != 2019.</li>
                                <li>The <b>Country flags in last seen & next stop boxes</b> is set to <b>Off</b>, as this feature was introduced in 2022.</li>
                                <li>Last but not least, <b>Your location accuracy</b> is set to <b>Approximate</b>. But no cheating and using the distance from you metric.</li>
                            </ul>
                            For the true authentic 2019 experience, you'll also want to avoid clicking on baskets to show stop info (that didn't come until 2020), not use the fullscreen button (introduced 2023), pretend the uncenter & info buttons don't exist (properly introduced in 2020), and don't click the settings button (also introduced in 2020).<br></br><br></br>
                            This is the third major iteration of track.easterbunny.cc in just 5 years, and we're so excited for the next 5. Here's to another half-decade of tracking! <br></br><br></br>
                            All remaining tracker settings are set to their defaults. If you're okay with these settings being changed, click the confirm button. Otherwise, click the cancel button.
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleClassicModal} title="Click to close this modal">
                                Close
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={() => {props.settingsMgr.set_classic(); toggleClassicModal(true); props.setActiveSettingsTab('tracker')}} title="Click to reset tracker settings to classic mode">
                                Confirm
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal> */}
        </>
    )
}