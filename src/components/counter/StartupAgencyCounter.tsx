import AnimatedCounterTwo from './AnimatedCounterTwo';

const StartupAgencyCounter = () => {
    // Counter data
    const counterData = [
        {
            id: 1,
            value: 6,
            suffix: '',
            duration: 1,
            label: 'Kilns, 1.4 to <br> 16 cu ft',
            className: ''
        },
        {
            id: 2,
            value: 30,
            suffix: '+',
            duration: 1,
            label: 'Housemade <br> studio glazes',
            className: ''
        },
        {
            id: 3,
            value: 22,
            suffix: '',
            duration: 1,
            label: 'Wheels across <br> studio & classrooms',
            className: ''
        },
        {
            id: 4,
            value: 20,
            suffix: '',
            duration: 1,
            label: 'Years throwing <br> in Greenpoint',
            className: ''
        }
    ];

    return (
        <div className="st-counter-area st-counter-ptb pb-160">
            <div className="container container-1320">
                <div className="st-counter-wrapper">
                    <div className="row gx-0">
                        {counterData.map((item) => (
                            <div key={item.id} className="col-md-3 col-sm-6">
                                <div className={`st-counter-item text-center ${item.className}`}>
                                    <h4>
                                        <AnimatedCounterTwo min={0} max={item.value} />
                                        {item.suffix}
                                    </h4>
                                    <span dangerouslySetInnerHTML={{ __html: item.label.replace('\n', '<br />') }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyCounter;