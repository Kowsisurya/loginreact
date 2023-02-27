import React, { Component } from "react";
import Chart from "react-apexcharts";
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
            height: '650px',
            width: '750',
            id: "basic-bar"
        },
        xaxis: {
            categories: ['Jan 21', 'Feb 21', 'Mar 21', 'Apr 21', 'Jun 21', 'JUL 21', 'Aug 21', 'Sep 21'],
            title: {
                text: 'Time'
              }
            },
            yaxis: {
                title: {
                  text: 'Cost'
                },
              },
        title: {
            text: 'Time line series',
            align: 'left'
        },
      },
      series: [
        {
          name: "VPC",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "EC2 - Other",
            data: [60, 90, 12, 50, 55, 98, 45, 23]
          },
          {
            name: "EC2 - ELB",
            data: [45, 98, 12, 45, 87, 12, 4, 7]
          },
      ]
    };
  }

  render() {
    return (
      <MDBContainer>
        <div className="chart">
            <div className="inner-chart mb-5">
                <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="800"
                />
            </div>
            <MDBTable className="table table-striped">
            <MDBTableHead dark>
                <tr>
                <th scope='col'>#</th>
                <th scope='col'>Service</th>
                <th scope='col'>Jan 21</th>
                <th scope='col'>Feb 21</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                <th scope='row'>1</th>
                <td>VPC</td>
                <td>23.45</td>
                <td>12.56</td>
                </tr>
                <tr>
                <th scope='row'>2</th>
                <td>EC2 - Other</td>
                <td>56.23</td>
                <td>76.45</td>
                </tr>
                <tr>
                <th scope='row'>3</th>
                <td>EC2 - ELB</td>
                <td>78</td>
                <td>12.45</td>
                </tr>
            </MDBTableBody>
            </MDBTable>
            </div>
        </MDBContainer>
    );
  }
}

export default App;
