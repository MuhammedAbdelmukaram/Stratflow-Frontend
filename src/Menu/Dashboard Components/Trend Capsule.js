import growingIcon from '../../Assets/Dashboard Assets/Growing.png';
import decliningIcon from '../../Assets/Dashboard Assets/Declining.png';

function TrendCapsule(props) {
    const { data } = props;

    const firstValue = data.datasets[0].data[0];
    const lastValue = data.datasets[0].data[data.datasets[0].data.length - 1];
    const difference = lastValue - firstValue;

    const percentage = Math.abs(Math.round((difference / firstValue) * 100));

    const isGrowing = difference > 0;

    const backgroundColor = isGrowing ? "#f7fcfb" : "#fff7f7";
    const borderColor = isGrowing ? "#06AD85" : "#F43F3F";
    const iconSrc = isGrowing ? growingIcon : decliningIcon;

    return (
        <div
            style={{
                borderRadius: 10,
                backgroundColor: backgroundColor,
                border: `1px solid ${borderColor}`,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: "auto",
                minWidth: 65,
                maxWidth:65,
                height: 25,
            }}
        >
            <img
                src={iconSrc}
                style={{
                    width: 19,
                    height: 21,
                    marginLeft: 5,
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 5,
                }}
                alt=""
            />

            <p
                style={{
                    color: isGrowing ? "#06AD85" : "#F43F3F",
                    fontSize: 12,
                    fontWeight: 800,
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 5,
                }}
            >
                {percentage}%
            </p>
        </div>
    );
}

export default TrendCapsule;