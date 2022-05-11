import styles from "./TimeCurrencyCard.module.css"


/* 
:currency:
    the current chose currency
:type:
    string
:showData:
    array of bitcoin data object with timestamp and price
:type:
    list[{dict}]
*/
function TimeCurrencyCard ({currency,showData}) {
    // ToDo 10.2.1
    /* 
    set price text color
    :index:
        the index of the current object
    :type:
        int
    :return:
        CSS classname
    :rtype:
        CSS  Object
    */
    const priceColor = (index) => {
        if (showData.length !== index+1) {
            if (showData[index+1].price < showData[index].price) {
                return styles.priceContainerUp;
            }
            else if (showData[index+1].price > showData[index].price) {
                return styles.priceContainerDown;
            }
            else {
                return styles.priceContainerEqual;
            }
        }
        else {
            return styles.priceContainerEqual;
        }
    }

    // ToDo 10.2.2
    /* 
    set arrow sign for price
    :index:
        the index of the current object
    :type:
        int
    :return:
        an arrow "↑" "↓" or '-' to show the price change status
    :rtype:
        string
    */
    const arrowSign = (index) => {
        if (showData.length !== index+1) {
            if (showData[index+1].price < showData[index].price) {
                return "↑";
            }
            else if (showData[index+1].price > showData[index].price) {
                return "↓";
            }
            else {
                return '-';
            }
        }
        else {
            return "=";
        }
    }
    
    // ToDo 10.2.3
    if (showData) {
        return (
            <>
            {showData.map((d, index) => (
                <div>
                    <div className={styles.cardContainer}>
                        {d.timestamp}
                        {" "}
                        <div className={priceColor(index)}>
                            {arrowSign(index)}
                            {currency === 'USD' ? "$" : "¥"}
                            {d.price}
                        </div>
                    </div>
                </div>
            ))}
            </>
        );
    }

}

export default TimeCurrencyCard;
