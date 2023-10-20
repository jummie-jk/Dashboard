import React from "react";
import './widget.scss'

const Widget = ({type}) => {
    let data;
     switch(type){
        case 'unresolved':
        data={
          title: 'Unresolved',
          num: 60
        };
        break;
        case 'overdue':
        data={
          title: 'Overdue',
          num: '16'
        };
        break;
        case 'open':
        data={
          title: 'Open',
          num: '43'
        };
        break;
        case 'onhold':
        data={
          title: 'On hold',
          num: 64
        };
        break;
// For Featured Charts
        case 'resolved':
        data={
          title: 'Resolved',
          num: 449
        };
        break;
        case 'received':
        data={
          title: 'Received',
          num: 426
        };
        break;
        case 'average':
          data={
            title: 'Average first response time',
            num: '43m'
          };
          break;
          case 'averagee':
            data={
              title: 'Average response time',
              num: '3h 8m'
            };
            break;
            case 'resolution':
              data={
                title: 'Resolution within SLA',
                num: '64%'
              };
              break;
        default:
        

        
     }
    return (
      <div className="widget">
        <div className="top">{data.title}</div>
        <div className="buttom">{data.num}</div>
      </div>
    );
  }
  
export default Widget;