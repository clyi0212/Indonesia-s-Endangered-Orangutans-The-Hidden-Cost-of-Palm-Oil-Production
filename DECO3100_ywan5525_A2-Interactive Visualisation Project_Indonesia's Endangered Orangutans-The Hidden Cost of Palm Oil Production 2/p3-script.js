Plotly.d3.csv("Figure3.csv", Figure3_data => {
  Plotly.d3.csv("Figure4.csv", Figure4_data => {
    Plotly.d3.csv("Figure5.csv", Figure5_data => {
    function drawPlot(chartType) {

      // Figure 3——Scatter Chart——Palm Oil Production from 1961 to 2020
      const Figure3_x = unpack(Figure3_data, 'Year');
      const TotalProduction_y = unpack(Figure3_data, 'Total Production');
      const IndonesiaProduction_y = unpack(Figure3_data, 'Indonesia Production');
      const MalaysiaProduction_y = unpack(Figure3_data, 'Malaysia Production');
      const ThailandProduction_y = Figure3_data.map(row => parseInt(row['Thailand Production'], 10));

      // Initialize chart data and layout variables
      let Figure3_chart_data;
      let Figure3_chart_layout;
  
      // If the chart type is scatter
      if (chartType === 'scatter') {
        Figure3_chart_data = [
          {
            x: Figure3_x,
            y: TotalProduction_y.map(y => y / 1e6),
            name: 'Total Production',
            hovertemplate: '%{data.name}: %{y:.2f}M<extra></extra>',
            type: chartType,
            mode: 'lines',
            line: { color: '#3F1C13' }
          },
          {
            x: Figure3_x,
            y: IndonesiaProduction_y.map(y => y / 1e6),
            name: 'Indonesia Production',
            hovertemplate: '<b>%{data.name}: %{y:.2f}M</b><extra></extra>',
            type: chartType,
            mode: 'lines',
            line: { color: '#9E6E6A' }
          },
          {
            x: Figure3_x,
            y: MalaysiaProduction_y.map(y => y / 1e6),
            name: 'Malaysia Production',
            hovertemplate: '%{data.name}: %{y:.2f}M<extra></extra>',
            type: chartType,
            mode: 'lines',
            line: { color: '#817168' }
          },
          {
            x: Figure3_x,
            y: ThailandProduction_y.map(y => y / 1e6),
            name: 'Thailand Production',
            hovertemplate: '%{data.name}: %{y:.2f}M<extra></extra>',
            type: chartType,
            mode: 'lines',
            line: { color: '#704E85' }
          },
        ];
  
        Figure3_chart_layout = {
            title: {
                text: 'Figure 3: Palm Oil Production from 1961 to 2020',
                font: {
                  size: 13,
                  color: '#9E6E6A',
                  family: 'Nunito Sans, sans-serif'
                },
                x: 0.02,
                y: 1.05
              },
              xaxis: {
                showgrid: false,
                fixedrange: true,
                tickvals: ['1961', '1970', '1980', '1990', '2000', '2010', '2020'],
                ticktext: ['1961', '1970', '1980', '1990', '2000', '2010', '2020'],
                tickfont: {
                  color: '#A36448',
                  size: 10
                },
                ticklen: 10,
                linecolor: '#B1CBCB',
                tickcolor: '#B4A1B0'
              },
              yaxis: {
                showline: true,
                fixedrange: true,
                ticktext: ['0', '20M', '40M', '60M', '80M'],
                tickfont: {
                  size: 8.8,
                  color: '#A36448'
                },
                tickvals: [0, 20, 40, 60, 80],
                ticklen: 10,
                linecolor: '#B1CBCB',
                tickcolor: '#B4A1B0'
              },
              margin: {
                l: 40, 
                r: 120,
                b: 100,
                t: 120,
              },
              hovermode: 'x unified',
              hoverlabel: {
                namelength: 1000
              },
              legend: {
                xanchor: "center",
                yanchor: "top",
                traceorder: "normal",
                orientation: "h",
                x: 0.5,
                y: 1.08,
                itemmode: 'array',
                traceorder: 'normal',
                itemwidth: 10,
                itemmargin: 150,
                itemclick: 'toggle',
                font: {
                  size: 8.1
                },
                itemsizing: 'constant',
                itemhovermode: 'expand',
                marker: {
                  color: ['#CF8C80', '#7A3B3F', '#C5C5C5'],
                  symbol: 'square',
                  size: 20,
                  line: {
                    color: 'rgba(0, 0, 0, 0.5)',
                    width: 1
                  }
                }
              },
              showlegend: true,
              plot_bgcolor: '#BCD9D9',
              paper_bgcolor: '#BCD9D9',
              annotations: [{
                text: 'Source 3: <a href="https://www.fao.org/faostat/en/#data/FBSH" target="_blank" rel="noopener noreferrer" style="color:#9E6E6A;text-decoration: underline;">Food Balances (-2013, old methodology and population)</a> & <a href="https://www.fao.org/faostat/en/#data/FBS" target="_blank" rel="noopener noreferrer" style="color:#9E6E6A;text-decoration: underline;">Food Balances<br> (2010-)</a> by Food and Agriculture Organization of the United Nations (FAOSTAT)',
                font: {
                  size: 13,
                  color: '#9E6E6A',
                  family: 'Nunito Sans, sans-serif',
                  lineheight: 1.4
                },
                x: 0.445,
                y: -0.2,
                showarrow: false,
                xref: 'paper',
                yref: 'paper',
                align: 'left',
            }],

        };
      } 

      // Figure 4——Stacked Area Chart——Leading Producers' Palm Oil Share (1961-2020)
      // If the chart type is area
      else if (chartType === 'area') {
  
        Figure3_chart_data = [
          {
            x: Figure3_x,
            y: TotalProduction_y.map(y => 100),
            name: 'Total Production',
            hovertemplate: '%{data.name}: %{y:.0f}%<extra></extra>',
            type: chartType,
            mode: 'scatter',
            line: {color: '#614F48'},
            fill: 'tonexty',
            fillcolor: 'rgba(97, 79, 72, 0.2)' 
          },
          {
            x: Figure3_x,
            y: IndonesiaProduction_y.map((y, i) => (y / TotalProduction_y[i]) * 100),
            name: 'Indonesia Production',
            hovertemplate: '<b>%{data.name}: %{y:.0f}%</b><extra></extra>',
            type: chartType,
            mode: 'scatter',
            line: {color: '#9E6E6A'},
            fillcolor: 'rgba(158, 110, 106, 0.8)' ,
            stackgroup: 'one',
            fill: 'tonexty'
          },
          {
            x: Figure3_x,
            y: MalaysiaProduction_y.map((y, i) => (y / TotalProduction_y[i]) * 100),
            name: 'Malaysia Production',
            hovertemplate: '%{data.name}: %{y:.0f}%<extra></extra>',
            type: chartType,
            mode: 'scatter',
            line: {color: '#817168'},
            fillcolor: 'rgba(129, 113, 104, 0.5)' ,
            stackgroup: 'one',
            fill: 'tonexty'
          },
          {
            x: Figure3_x, 
            y: ThailandProduction_y.map((y, i) => (y / TotalProduction_y[i]) * 100),
            name: 'Thailand Production',
            hovertemplate: '%{data.name}:%{y:.0f}%<extra></extra>',
            type: chartType,
            mode: 'scatter',
            line: {color: '#704E85'},
            fillcolor: 'rgba(112, 78, 133, 0.3)' ,
            stackgroup: 'one',
            fill: 'tonexty'
        },
    ]
  
        Figure3_chart_layout = {
          title: {
            text: "Figure 4: Leading Producers' Palm Oil Share (1961-2020)",
            font: {
              size: 13,
              color: '#9E6E6A',
              family: 'Nunito Sans, sans-serif'
            },
            x: 0.02,
            y: 1.05
          },
          xaxis: {
            showgrid: false,
            fixedrange: true,
            tickvals: ['1961', '1970', '1980', '1990', '2000', '2010', '2020'],
            ticktext: ['1961', '1970', '1980', '1990', '2000', '2010', '2020'],
            tickfont: {
              color: '#A36448',
              size: 10
            },
            ticklen: 10,
            linecolor: '#B1CBCB',
            tickcolor: '#B4A1B0'
          },
          yaxis: {
            showline: true,
            fixedrange: true,
            ticktext: ['0%', '20%', '40%', '60%', '80%', '100%'],
            tickfont: {
              size: 8.8,
              color: '#A36448'
            },
            tickvals: [0, 20, 40, 60, 80, 100], 
            ticklen: 10,
            linecolor: '#B1CBCB',
            tickcolor: '#B4A1B0'
          },
          margin: {
            l: 40, 
            r: 110, 
            b: 100, 
            t: 120, 
          },
          hovermode: 'x unified',
          hoverlabel: {
            namelength: 1000
          },
          legend: {
            xanchor: "center",
            yanchor: "top",
            traceorder: "normal",
            orientation: "h",
            x: 0.5,
            y: 1.08,
            itemmode: 'array',
            traceorder: 'normal',
            itemwidth: 20,
            itemmargin: 1500,
            itemclick: 'toggle',
            font: {
              size: 8.1
            },
            itemsizing: 'constant',
            itemhovermode: 'expand',
            marker: {
              color: ['#CF8C80', '#7A3B3F', '#C5C5C5'],
              symbol: 'square',
              size: 20,
              line: {
                color: 'rgba(0, 0, 0, 0.5)',
                width: 1
              }
            }
          },
          showlegend: true,
          plot_bgcolor: '#BCD9D9',
          paper_bgcolor: '#BCD9D9',
          annotations: [{
            text: 'Source 4: <a href="https://www.fao.org/faostat/en/#data/FBSH" target="_blank" rel="noopener noreferrer" style="color:#9E6E6A;text-decoration: underline;">Food Balances (-2013, old methodology and population)</a> & <a href="https://www.fao.org/faostat/en/#data/FBS" target="_blank" rel="noopener noreferrer" style="color:#9E6E6A;text-decoration: underline;">Food Balances<br> (2010-)</a> by Food and Agriculture Organization of the United Nations (FAOSTAT)',
            font: {
              size: 13,
              color: '#9E6E6A',
              family: 'Nunito Sans, sans-serif',
              lineheight: 1.4
            },
            x: 0.445,
            y: -0.2,
            showarrow: false,
            xref: 'paper',
            yref: 'paper',
            align: 'left',
          }],
        };
      }
    
      Plotly.newPlot('Figure3', Figure3_chart_data, Figure3_chart_layout, { displayModeBar: false })}
    
      // Draw the initial scatter chart
      drawPlot('scatter');
  
      // When the drop-down menu and redraw the chart with the new chart type when changes occur.
      const dropdownMenu = document.getElementById('chartType');
      dropdownMenu.addEventListener('change', (event) => {
          const newChartType = event.target.value;
          drawPlot(newChartType);
      });



      /// Figure5——Pie Chart - Forest loss by region 2001-2019 as % of total area lost.

      // Function to find data by region from the Figure4_data array
      const findDataByRegion = (region) => {
      // Finding the item in the Figure4_data array that matches the region
        const item = Figure4_data.find(d => d.Region === region);
        // If item is found, return the ForestlossArea as a Number. If not found, return 0
        return item ? Number(item['ForestlossArea']) : 0;
      }
      // Assigning values to each region by calling findDataByRegion function
      const Indonesia_x = findDataByRegion('Indonesia');
      const Sumatra_x = findDataByRegion('Sumatra');
      const Kalimantan_x = findDataByRegion('Kalimantan');
      const Papua_x = findDataByRegion('Papua');
      const Sulawesi_x = findDataByRegion('Sulawesi');
      const JavaMaluku_x = findDataByRegion('JavaMaluku');
      const Others_x = findDataByRegion('Others');  
      // Calculate percentages for each region and store them in the values array
      const values = [Others_x / Indonesia_x * 100, Sulawesi_x / Indonesia_x * 100, JavaMaluku_x / Indonesia_x * 100, Papua_x / Indonesia_x * 100, Kalimantan_x / Indonesia_x * 100, Sumatra_x / Indonesia_x * 100];


      const Figure4_chart_data = [{
          labels: ['Others', 'Sulawesi', 'Java Maluku', 'Papua', 'Kalimantan', 'Sumatra'],
          values: values,
          customdata: [Others_x/ 1e6, Sulawesi_x/ 1e6, JavaMaluku_x/ 1e6, Papua_x/ 1e6, Kalimantan_x/ 1e6, Sumatra_x/ 1e6],
          hovertemplate: '<b>%{label} Loss: <br> %{customdata:.2f}Mha(%{value:.1f}%)</b><extra></extra>',
          type: 'pie',
          values: values,
          text: values.map(val => (parseFloat(val).toFixed(1) + '%')),
          textinfo: 'label+text',
          marker: {
              colors: ['#FFF9FF', '#D2CFD6', '#E6D4DF', '#CFB1BB', '#B88E93', '#9E6E6A']
          }
      }];
        
      
      const Figure4_chart_layout = {
        title: {
            text: 'Figure 5: Regional Forest Loss in Indonesia (2001-2019) - Millions of Hectares(Mha), %Total',
            font: {
                size: 13,
                color: '#9E6E6A',
                family: 'Nunito Sans, sans-serif'
            },
            x: 0.02,
            y: 2
        },
        margin: {
            t: 140, 
            r: 10, 
            b: 140, 
            l: 10
        },

        plot_bgcolor: '#BCD9D9',
        paper_bgcolor: '#BCD9D9',

        legend: {
            xanchor: "center",
            yanchor: "top",
            traceorder: "normal",
            orientation: "h", 
            x: 0.425,
            y: 1.15,
            itemmode:'array',
            itemwidth: 20,  
            itemmargin: 1500, 
            itemclick: 'toggle',
            font: {
            size: 8.1
            }
        },
        showlegend: true,
                        
        annotations: [{
            text: 'Source 5: <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0266178" target="_blank" style="color:#9E6E6A;text-decoration: underline;">Slowing deforestation in Indonesia follows declining oil palm expansion <br> and lower oil prices</a> by David L. A. Gaveau, Bruno Locatelli, etc.',
            font: {
                size: 13,
                color: '#9E6E6A',
                family: 'Nunito Sans, sans-serif',
                lineheight: 1.4
            },
            x: -0.065,
            xanchor:"left",
            y: -0.25,
            showarrow: false,
            xref: 'paper',
            yref: 'paper',
            align: 'left',
        }],   
      };
      Plotly.newPlot('Figure4', Figure4_chart_data, Figure4_chart_layout, {displayModeBar: false});


      /// Figure6 — Bar Chart — Forest conversion to palm oil by region in Indonesia, 2001-2019 (%).
      // Extract 'Region' from each row in Figure5_data and store it in the 'regions' array.
      let regions = Figure5_data.map(row => row['Region']);
      // Extract 'ForestLoss' from each row in Figure5_data, convert it to a number, scale down by a million (1e6), and store these values in 'y1_values'.
      let y1_values = Figure5_data.map(row => Number(row['ForestLoss']) / 1e6);
      // Extract 'ForestToOp' from each row in Figure5_data, convert it to a number, scale down by a million (1e6), and store these values in 'y2_values'.
      let y2_values = Figure5_data.map(row => Number(row['ForestToOp']) / 1e6);

      // Calculate the percentage of forest loss converted to palm oil for each region and store these percentages in 'percentage'.
      let percentage = y2_values.map((value, index) => ((value / y1_values[index]) * 100).toFixed(1));

      
      const Figure5_chart_data = [
        {
            x: regions, // Set 'regions' as x-values
            y: y1_values, // Set 'y1_values' as y-values for the 'Area of Forest Loss' trace
            name: 'Area of Forest Loss',  // Name of the trace
            hovertemplate: '%{data.name}: %{y:.2f}Mha<extra></extra>',  // Template for the hover text
            type: 'bar', // Type of the trace (bar chart)
            marker: {
                color: '#9E6E6A' // Color of the bars
            },
        },
        {
            x: regions, // Set 'regions' as x-values
            y: y2_values, // Set 'y2_values' as y-values for the 'Forest converted to Oil Palm Plantation' trace
            name: 'Forest converted to Oil Palm Plantation', // Name of the trace
            hovertemplate: Figure5_data.map((row, i) => {
              return 'Forest converted to Oil Palm<br>Plantation: %{y:.2f}Mha<extra></extra>' + 
              ' <b>(' + percentage[i] + '%)';  // Template for the hover text   
            }),   
            type: 'bar', // Type of the trace (bar chart)        
            marker: {
                color: '#D9C4BC' // Color of the bars
            },
        },
      ];


      
    
      const Figure5_chart_layout = {
          title: {
            text: 'Figure 6: Forest conversion to palm oil by region in Indonesia, 2001-2019 (Million Hectares).<br><br><a style="color:#A87E78; font-size: 11px;"> * The number in parentheses shows the conversion rate, indicating the proportion of deforested areas in the<br>     region transformed into oil palm plantations.</a>',
            font: {
                  size: 13,
                  color: '#9E6E6A',
                  family: 'Nunito Sans, sans-serif'
              },
              x: 0.02,
              y: 0.95
          },


          xaxis: {
              showgrid: false,
              fixedrange: true,
              tickfont: {
                  color: '#A36448',
                  size: 11,
                  weight: 'bold'
              },
              ticklen: 10,
              linecolor:'#B1CBCB',
              tickcolor: 'B4A1B0'
          },
          
          yaxis: {
              showline: true, 
              fixedrange: true,
              tickfont: {
                  color: '#A36448',
                  size: 10
              },
              tickvals: [0, 1, 2, 3, 4, 5],
              ticktext: ['0', '1M', '2M', '3M', '4M', '5M'],
              ticklen: 10,
              linecolor:'#B1CBCB',
              tickcolor: 'B4A1B0'
          },


          margin: {
            t: 130, 
            r: 10, 
            b: 100, 
            l: 30
        },


          plot_bgcolor: '#BCD9D9',
          paper_bgcolor: '#BCD9D9',
          hovermode: 'x unified',
      
          legend: {
              xanchor: "center",
              yanchor: "top",
              traceorder: "normal",
              orientation: "h", 
              x: 0.425,
              y: 1.08,
              itemmode:'array',
              traceorder: 'normal',
              itemwidth: 20,  
              itemmargin: 1500, 
              itemclick: 'toggle',
              font: {
              size: 8.1
              }
          },
          showlegend: true,


          hoverlabel: {
              namelength: 1000
          },

          annotations: [{
              text: 'Source 6: <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0266178" target="_blank" style="color:#9E6E6A;text-decoration: underline;">Slowing deforestation in Indonesia follows declining oil palm expansion <br>and lower oil prices</a> by David L. A. Gaveau, Bruno Locatelli, etc.',
              font: {
                  size: 13,
                  color: '#9E6E6A',
                  family: 'Nunito Sans, sans-serif',
                  lineheight: 1.4
              },
              x: -0.02,
              xanchor:"left",
              y: -0.28,
              showarrow: false,
              xref: 'paper',
              yref: 'paper',
              align: 'left',

          }],
          barmode: 'stack' //Different traces will stack on top of each other.
      };

      Plotly.newPlot('Figure5', Figure5_chart_data, Figure5_chart_layout, {displayModeBar: false});

    });

  });
  
});