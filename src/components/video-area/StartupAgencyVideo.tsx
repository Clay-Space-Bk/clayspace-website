import StartupAgencyVideoTextSlider from '../text-slider/StartupAgencyVideoTextSlider';
import videoThumb from '../../../public/assets/img/clayspace/home3.jpg';
import avaterImg from '../../../public/assets/img/clayspace/products/product-02.jpg';
import { useVideoModal } from '@/provider/VideoProvider';
import { QuoteIconFour, VideoPlayIcon } from '@/svg';
import Image from 'next/image';

const StartupAgencyVideo = () => {
    const { playVideo } = useVideoModal();

    return (
        <div className="st-video-area">
            <div className="st-video-wrapper p-relative">
                {/* Testimonial Section */}
                <div className="st-video-item">
                    <div className="creative-choose-text z-index-1">
                        <p>
                            <span className="creative-choose-text-top">
                                <QuoteIconFour />
                                We believe
                            </span>
                            <br />
                            <span className="creative-choose-text-middle">everyone is creative — clay</span>
                            <br />
                            <span className="creative-choose-text-bottom">is how we prove it</span>
                        </p>

                        <div className="creative-choose-avater-box d-inline-flex align-items-center">
                            <div className="creative-choose-avater">
                                <Image src={avaterImg} alt="Clay centered on the wheel" />
                            </div>
                            <div className="creative-choose-avater-info">
                                <h4>Janine Sopp</h4>
                                <span>Founding Director, Clay Space</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Thumbnail Section */}
                <div className="st-video-img">
                    <Image
                        style={{ width: "100%", height: "auto" }}
                        className="w-100"
                        data-speed=".8"
                        src={videoThumb}
                        alt="Clay Space at 275 Calyer Street at dusk"
                        priority
                    />
                    <VideoPlayButton onClick={() => playVideo("VCPGMjCW0is")} />
                </div>

                {/* Slider Text Section */}
                <StartupAgencyVideoTextSlider />
            </div>
        </div>
    );
};

const VideoPlayButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="popup-video dgm-testimonial-playbtn z-index-1"
        aria-label="Play video"
    >
        <span>
            <VideoPlayIcon />
        </span>
    </button>
);



export default StartupAgencyVideo;