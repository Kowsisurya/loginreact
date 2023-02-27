
import React from 'react';
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import { chartMonthApplicationSpend, spendChartMonthApplicationSpend } from "../../action/costimizedashboardAction";
import { useState, useEffect } from 'react';
import { titleCase, nFormatter } from "../../custom_hook/CustomHook";
import { dummyMonth1records, dummyMonth2records, dummyMonth3records } from '../../dummy_records/DummyRecords';

function SavingModelBarChart() {
  // console.log(props);
  // console.log(props.countchartvm);
  const { companyName } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [chartvalue, setChartValue] = useState([]);
    const [chartcategories, setChartCategories] = useState([]);
    const [month_1_data, setmonth_1_data] = useState([]);
    const [month_2_data, setmonth_2_data] = useState([]);
    const [month_3_data, setmonth_3_data] = useState([]);
    const [apllicationlist, setApplicationList] = useState([]);
    const [secondmax,setSecondMax] = useState(0);
    const [firstmax,setFirstMax] = useState(0);
    const { selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate, applicationList, selectedservices, selectedos, selectedinfra,selecteddb, dummydatastatus } = useSelector((state) => state.constimize);
    useEffect(() => {
      const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var cart_date;
      if(selectedTopdate.split(",")?.length > 1){
          var currentdate = new Date();
          cart_date = `${currentdate.getFullYear()}-${currentdate.getMonth()+1}-01`;
      }else{
          cart_date = selectedTopdate;
      }

      //month 1
      const selecteddate = new Date(cart_date)
      const month_1 = `${selecteddate.getFullYear()}-${selecteddate.getMonth()+1}-01`;
      const month_1_current = new Date(month_1);
      const month_1_0 = `${monthNamesShort[month_1_current.getMonth()]}`;
      // month 2
      const month_2_current = new Date(selecteddate.getFullYear(),selecteddate.getMonth()-1,1);
      const month_2 = `${month_2_current.getFullYear()}-${month_2_current.getMonth()+1}-01`;
      const month_2_0 = `${monthNamesShort[month_2_current.getMonth()]}`;
      // month 3
      const month_3_current = new Date(selecteddate.getFullYear(),selecteddate.getMonth()-2,1);
      const month_3 = `${month_3_current.getFullYear()}-${month_3_current.getMonth()+1}-01`;
      const month_3_0 = `${monthNamesShort[month_3_current.getMonth()]}`;
      
      // var valuelist = [["type", month_1_0, month_2_0, month_3_0]];
      
      var valuelist = [];
        const apivalue = {
            environment : selectedEnvironment.toString(),
            account: selectedAccount.toString(),
            cloud: selectedCloud.toString(),
            application: selectedApplication.toString(),
            services: selectedservices.toString(),
            os: selectedos.toString(),
            infra: selectedinfra.toString(),
            db: selecteddb.toString()
        }
        

        //month 1
        var makeDate = month_1;
        if(dummydatastatus){
          const dummyrecords = dummyMonth1records();
          console.log(dummyrecords.newfunctionquery);

          setmonth_1_data(dummyrecords.newfunctionquery);
          var mainchartvalue = [];
          applicationList.map((appdata, index) => {
            const listapplicationlistfillter = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.applications?.toLowerCase() === appdata?.toLowerCase();
            });
            const chartvalue = Math.round(listapplicationlistfillter?.reduce((a,v) =>  a = +a + +v.spend , 0 ));
            mainchartvalue.push({
              cate: titleCase(appdata),
              value: chartvalue
            });
          });
          var getchartvaluelist = [...mainchartvalue].sort((a, b) => (a.value > b.value ? -1 : 1));
          const app_list = [];
          for (let index = 0; index < 4; index++) {
            app_list.push(getchartvaluelist[index].cate);
          }
          setApplicationList(app_list);
        }else{
          dispatch(spendChartMonthApplicationSpend({companyName, makeDate, apivalue}))
          .unwrap()
          .then(({ data }) => {
            // console.log(data.newfunctionquery);
              setmonth_1_data(data.newfunctionquery);
              var mainchartvalue = [];
              applicationList.map((appdata, index) => {
                const listapplicationlistfillter = data.newfunctionquery?.filter(datas => {
                    return datas.applications?.toLowerCase() === appdata?.toLowerCase();
                });
                const chartvalue = Math.round(listapplicationlistfillter?.reduce((a,v) =>  a = +a + +v.spend , 0 ));
                mainchartvalue.push({
                  cate: titleCase(appdata),
                  value: chartvalue
                });
              });
              var getchartvaluelist = [...mainchartvalue].sort((a, b) => (a.value > b.value ? -1 : 1));
              const app_list = [];
              for (let index = 0; index < 4; index++) {
                app_list.push(getchartvaluelist[index].cate);
              }
              setApplicationList(app_list);
             
          })
          .catch(err => {
          console.log(err.message);
          });
  
        }
       
        
       



        // month 2
        var makeDate = month_2;
        if(dummydatastatus){
          const dummyrecords = dummyMonth2records();
          setmonth_2_data(dummyrecords.newfunctionquery);
        }else{
            dispatch(spendChartMonthApplicationSpend({companyName, makeDate, apivalue}))
            .unwrap()
            .then(({ data }) => {
                setmonth_2_data(data.newfunctionquery);
            })
            .catch(err => {
            console.log(err.message);
            });
        }
       
        //month 3
        if(dummydatastatus){
          const dummyrecords = dummyMonth3records();
          setmonth_3_data(dummyrecords.newfunctionquery);
        }else{
            var makeDate = month_3;
            dispatch(spendChartMonthApplicationSpend({companyName, makeDate, apivalue}))
            .unwrap()
            .then(({ data }) => {
                setmonth_3_data(data.newfunctionquery);
            })
            .catch(err => {
            console.log(err.message);
            });
        }
       
        
    },[selectedTopdate]);

    useEffect(() => {
      const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var cart_date;
        if(selectedTopdate.split(",")?.length > 1){
            var currentdate = new Date();
            cart_date = `${currentdate.getFullYear()}-${currentdate.getMonth()+1}-01`;
        }else{
            cart_date = selectedTopdate;
        }

        //month 1
        const selecteddate = new Date(cart_date)
        const month_1 = `${selecteddate.getFullYear()}-${selecteddate.getMonth()+1}-01`;
        const month_1_current = new Date(month_1);
        const month_1_0 = `${monthNamesShort[month_1_current.getMonth()]}`;
        // month 2
        const month_2_current = new Date(selecteddate.getFullYear(),selecteddate.getMonth()-1,1);
        const month_2 = `${month_2_current.getFullYear()}-${month_2_current.getMonth()+1}-01`;
        const month_2_0 = `${monthNamesShort[month_2_current.getMonth()]}`;
        // month 3
        const month_3_current = new Date(selecteddate.getFullYear(),selecteddate.getMonth()-2,1);
        const month_3 = `${month_3_current.getFullYear()}-${month_3_current.getMonth()+1}-01`;
        const month_3_0 = `${monthNamesShort[month_3_current.getMonth()]}`;
        
        // var valuelist = [["type", month_1_0, month_2_0, month_3_0]];
        
        var valuelist = [];

      var month1_valuelist = [];
        var month2_valuelist = [];
        var month3_valuelist = [];
        var cat_valuelist = [];
        //top list
        // console.log(apllicationlist);
        //all list
        // console.log(applicationList);

        apllicationlist.map((datalist,index) => {
            const month1value = month_1_data?.filter(datas => {
                // return datas.applications === datalist;
                return datas.applications.toLowerCase() === datalist.toLowerCase();
            });
            var fin_month1value = 0
            if(month1value?.length > 0){
                fin_month1value = Math.round(month1value.reduce((a,v) =>  a = +a + +v.spend , 0 ));
            }
            const month2value = month_2_data?.filter(datas => {
                // return datas.applications === datalist;
                return datas.applications.toLowerCase() === datalist.toLowerCase();
            });
            var fin_month2value = 0
            if(month2value?.length > 0){
                fin_month2value = Math.round(month2value.reduce((a,v) =>  a = +a + +v.spend , 0 ));
            }
            const month3value = month_3_data?.filter(datas => {
                // return datas.applications === datalist;
                return datas.applications.toLowerCase() === datalist.toLowerCase();
            });
            var fin_month3value = 0
            if(month3value?.length > 0){
                fin_month3value = Math.round(month3value.reduce((a,v) =>  a = +a + +v.spend , 0 ));
            }
            // valuelist.push([datalist, fin_month1value, fin_month2value, fin_month3value]);
            // valuelist.push({name : datalist, data: [fin_month1value, fin_month2value, fin_month3value]});
            

            if(index < 4){
              cat_valuelist.push(titleCase(datalist));
              month1_valuelist.push(fin_month1value);
              month2_valuelist.push(fin_month2value);
              month3_valuelist.push(fin_month3value);
            }
        })
        setChartCategories(cat_valuelist)
        // console.log([{name : month_1_0, data: month1_valuelist},{name : month_2_0, data: month2_valuelist},{name : month_3_0, data: month3_valuelist}]);

        var arr_other = month1_valuelist;
        var arr_db = month2_valuelist;
        var arr_vm = month3_valuelist;
        var total_array_list = month1_valuelist.concat(month2_valuelist,month3_valuelist);
        setFirstMax(Math.max(...total_array_list));

        arr_other = arr_other.reduce((pv, cv) => pv + cv, 0);
        arr_db = arr_db.reduce((pv, cv) => pv + cv, 0);
        arr_vm = arr_vm.reduce((pv, cv) => pv + cv, 0);
        const total_sum = +arr_other + +arr_db + +arr_vm;
        const total_count = +(month3_valuelist.length) + +(month2_valuelist.length) + +(month1_valuelist.length);
        setSecondMax(Math.round(total_sum / total_count));


        setChartValue([{name : month_1_0, data: month1_valuelist},{name : month_2_0, data: month2_valuelist},{name : month_3_0, data: month3_valuelist}]);
    },[ month_1_data,month_2_data,month_3_data ]);

  const options =  {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
          show: false,
      },
      background: '#fff'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
        dataLabels: {
          orientation: 'vertical',
          position: 'top' ,// bottom/center/top,
        }
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: 10000,
      formatter: function (num, opts) {
        if(secondmax > num || num === 0){
          return '';
        }else{
          // num = Math.round(nFormatter(num));
          return nFormatter(num);
        }
      },
      style: {
        fontSize: '9px',
        colors: ['#fff']
      },
      background: {
        enabled: true,
        foreColor: '#000',
        borderWidth: 0,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
        }
      }
    },
    colors: [
      '#4472c4',
      '#ed7d31',
      '#a5a5a5'
    ],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: chartcategories,
      tickPlacement: 'between',
      labels: {
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: true,
          minHeight: undefined,
          // maxHeight: undefined,
          style: {
              fontSize: '9px',
              fontWeight: 500
          },
          offsetX: 0,
          offsetY: -5,
          formatter: (value) => { 
            var latter = value.split(' ');
            var return_value;
            if(latter.length > 1){
              return_value = latter[0].substring(0, 3) + "..." + latter[0].substring(0, 3) + "..";
            }else{
              return_value = latter[0].substring(0, 3) + "...";
            }
            return return_value;
          }
      },
    },
    yaxis: {
        max:secondmax,
        tickAmount: 6,
        labels: {
          show: true,
          style: {
              fontSize: '9px',
              fontWeight: 500
          },
          formatter: (value) => { 
            var num; 
            if(Math.round(value) === secondmax){
              // num = firstmax;
              num = '...';
            }else{
              num = Math.round(value);
              num = nFormatter(num);
            }
            return num;
          },
      },
    },
    fill: {
      opacity: 1
    },
    title: {
        text: 'Top Spend Trend',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 5,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          color:  '#595959'
        },
    },
    legend: {
      show: true,
      offsetY: 0,
      fontSize: '10px',
    },
  };

  const series =  chartvalue;
    return (
      <ReactApexChart options={options} series={series} type="bar" height={200} />
    );
}

export default SavingModelBarChart;