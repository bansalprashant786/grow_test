import React,{ Component} from 'react';
import { Link} from 'react-router-dom';

import './style.css';

const states = {
    AN	: 'Andaman and Nicobar Islands',
	AP:	'Andhra Pradesh',
	AR:	'Arunachal Pradesh',
	AS:'Assam',
	BR:'Bihar',
	CH:'Chandigarh',
	CT:'Chhattisgarh',
	DN:'Dadra and Nagar Haveli',
	DD:'Daman and Diu',
	DL:'Delhi',
	GA:'Goa',
	GJ:'Gujarat',
    HR:'Haryana',
	HP:'Himachal Pradesh',
	JK:'Jammu and Kashmir',
	JH:'Jharkhand',
	KA:'Karnataka',
	KL:'Kerala',
	LA:'Lakshadweep',
	MP:'Madhya Pradesh',
	MH:'Maharashtra',
	MN:'Manipur',
	ML:'Meghalaya',
	MZ:'Mizoram',
	NL:'Nagaland',
	OR:'Odisha',
	PY:'Puducherry',
	PB:'Punjab',
	RJ:'Rajasthan',
	SK:'Sikkim',
	TN:'Tamil Nadu',
	TG:'Telangana',
	TR:'Tripura',
	UP:'Uttar Pradesh',
    UT:'Uttarakhand',
	WB:'West Bengal'
}

class Homepage extends Component{

    getTotalConfirmedCase = () => {
        let total = Object.keys(this.props.data).reduce((acc, cur) => {
           acc = acc+  this.props.data[cur].total.confirmed;
            return acc;
        },0)

        return total;
    }

    getRecoveredCase = () => {
        let total = Object.keys(this.props.data).reduce((acc, cur) => {
           acc = acc+ this.props.data[cur].total.recovered;
            return acc;
        },0)

        return total;
    }

    getActiveCases = () => {
        return this.getTotalConfirmedCase() - this.getRecoveredCase();
    }
    getDeceasedCase = () => {
        let total = Object.keys(this.props.data).reduce((acc, cur) => {
           acc = acc+ this.props.data[cur].total.deceased;
            return acc;
        },0)

        return total;
    }

    handleclick = (stateCode) => {
        if(stateCode &&! this.props.isState){
            this.props.history.push(`/state/${stateCode}`)
        }
    }

    render(){

        return (
            <div>
                <p>{this.props.isState ? states[this.props.id] : 'India'}</p>
                <div className='flex spaceBetween'>
                    <div className='case-card'>
                        <div>Total confirmed</div>
                        <div>{this.getTotalConfirmedCase()}</div>
                    </div>
                    <div className='case-card'>
                        <div>Active</div>
                        <div>{this.getActiveCases()}</div>
                    </div>
                    <div className='case-card'>
                        <div>Recovered</div>
                        <div>{this.getRecoveredCase()}</div>
                    </div>
                    <div className='case-card'>
                        <div>Deceased</div>
                        <div>{this.getDeceasedCase()}</div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>
                            {this.props.isState ? 'City' : 'State'}
                        </th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(this.props.data).map((stateCode)=>
                                <tr index={stateCode} onClick={() => this.handleclick(stateCode)}>
                                    {
                                        this.props.isState ? 
                                        <td>{stateCode}</td>:
                                        <td>{states[stateCode]}</td>}
                                    <td>{this.props.data[stateCode].total.confirmed}</td>
                                    <td>{this.props.data[stateCode].total.confirmed - this.props.data[stateCode].total.recovered}</td>
                                    <td>{this.props.data[stateCode].total.recovered}</td>
                                    <td>{this.props.data[stateCode].total.deceased}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
        
    }
        
}

export default Homepage;