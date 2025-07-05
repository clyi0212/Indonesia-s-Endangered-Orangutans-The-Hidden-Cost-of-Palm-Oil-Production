


const unpack = (data, key) => data.map(row => row[key])

Plotly.d3.csv("Figure1.csv", Figure1_data => {
        Plotly.d3.csv("Figure2.csv", Figure2_data => {


            /// Figure1——Stacked Area Chart - Production of Major Vegetable Oils Worldwide from 2010 to 2020
            const Figure1_x = unpack(Figure1_data, 'Year');
            const Figure1_CoconutOil = unpack(Figure1_data, 'CoconutOil');
            const Figure1_CottonseedOil = unpack(Figure1_data, 'CottonseedOil');
            const Figure1_GroundnutOil = unpack(Figure1_data, 'GroundnutOil');
            const Figure1_LinseedOil = unpack(Figure1_data, 'LinseedOil');
            const Figure1_MaizeOil = unpack(Figure1_data, 'MaizeOil');
            const Figure1_PalmKernelOil = unpack(Figure1_data, 'PalmKernelOil');
            const Figure1_SesameSeedOil = unpack(Figure1_data, 'SesameSeedOil');
            const Figure1_OliveOil = unpack(Figure1_data, 'OliveOil');
            const Figure1_PalmOil = unpack(Figure1_data, 'PalmOil');
            const Figure1_RapeseedOil = unpack(Figure1_data, 'RapeseedOil');
            const Figure1_SoybeanOil = unpack(Figure1_data, 'SoybeanOil');
            const Figure1_SunflowerOil = unpack(Figure1_data, 'SunflowerOil');
            
            const Figure1_chart_data = [
                {
                    x: Figure1_x,
                    y: Figure1_CoconutOil.map(y => y / 1e6),    // The y coordinates are divided by 1e6 to convert them to millions
                    stackgroup: 'one',    // These traces should be stacked on top of each other
                    name: 'Coconut Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',    // Points are not represented individually, but as a filled area.
                    fillcolor: '#7DCCE3'

                },
                {
                    x: Figure1_x,
                    y: Figure1_CottonseedOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Cottonseed Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#41B8D5'

                },
                {
                    x: Figure1_x,
                    y: Figure1_GroundnutOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Groundnut Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#2D8BBA'

                },
                {
                    x: Figure1_x,
                    y: Figure1_LinseedOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Linseed Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#2F5F98'

                },
                {
                    x: Figure1_x,
                    y: Figure1_MaizeOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Maize Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#DFDFDF'

                },

                {
                    x: Figure1_x,
                    y: Figure1_PalmKernelOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Palm Kernel Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#704E85'

                },
                {
                    x: Figure1_x,
                    y: Figure1_SesameSeedOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Sesame Seed Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#A66C98'

                },
                {
                    x: Figure1_x,
                    y: Figure1_OliveOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Olive Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons</b><extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#7985AB'

                },
                {
                    x: Figure1_x,
                    y: Figure1_SunflowerOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Sunflower Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#FFB9BD',
                },
                {
                    x: Figure1_x,
                    y: Figure1_RapeseedOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Rapeseed Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#777155',
                },
                {
                    x: Figure1_x,
                    y: Figure1_PalmOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Palm Oil',
                    hovertemplate: '<b>%{data.name}: %{y:.2f} Million metric tons</b><extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#9F7663',
                },
                {
                    x: Figure1_x,
                    y: Figure1_SoybeanOil.map(y => y / 1e6),
                    stackgroup: 'one',
                    name: 'Soybean Oil',
                    hovertemplate: '%{data.name}: %{y:.2f} Million metric tons<extra></extra>',
                    fill: 'tonexty',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: '#764B36',
                },
            ];
        
            const Figure1_chart_layout = {
                // Title of the chart
                title: {
                    text: 'Figure 1: Production of major vegetable oils worldwide from 2010 to 2020',
                    font: {
                    size: 13,
                    color: '#9E6E6A',
                    family: 'Nunito Sans, sans-serif'
                    },
                    x: 0.02,
                    y: 0.95
                },

                // X-axis properties
                xaxis: {
                    tickmode: 'array',
                    fixedrange: true,
                    tickfont: {
                        color: '#764B36',
                        size: 10,
                    },
                    tickvals: Figure1_x,
                    ticklen: 10, 
                    linecolor:'#BDB1CB',
                    tickcolor: '#9F7663'
                },

                // Y-axis properties
                yaxis: {
                    showline: true, 
                    fixedrange: true,
                    tickmode: 'array',
                    ticktext: ['0', '50M', '100M', '150M', '200M', '250M'],
                    tickvals: [0, 50, 100, 150, 200, 250], 
                    tickfont: {
                        color: '#764B36',
                        size: 10,
                    },
                    ticklen: 10,
                    linecolor:'#BDB1CB',
                    tickcolor: '#9F7663'                    
                },

                // Margin of the chart
                margin: { 
                    l: 40, 
                    r: 240,
                    b: 120, 
                    t: 130, 
                  },
                
                hovermode: 'x unified',     // Hover label properties
                hoverlabel: {
                    namelength: 30,
                },
        
                legend: {
                    xanchor: "center",
                    yanchor: "top",
                    traceorder: "reversed",
                    orientation: "h", 
                    x: 0.48,
                    y: 1.24,
                    itemmode:'array',
                    itemwidth: 20,  
                    itemmargin: 1500, 
                    itemclick: 'toggle',
                    font: {
                    size: 8.1
                    }
                },
        
                showlegend: true,  

                plot_bgcolor: '#C9BCD9',
                paper_bgcolor: '#C9BCD9',

                // Annotations for the chart
                annotations: [{
                    text: 'Source 1: <a href="https://www.fao.org/faostat/en/#data/SCL" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration: underline;">Supply Utilization Accounts (2010-2020)</a> by Food and Agriculture Organization <br> of the United Nations (FAOSTAT)',
                    font: {
                        size: 13,
                        color: '#9E6E6A',
                        family: 'Nunito Sans, sans-serif',
                        lineheight: 1.4
                    },
                    x: -0.052,
                    xanchor:"left",
                    y: -0.25,
                    showarrow: false,
                    xref: 'paper',
                    yref: 'paper',
                    align: 'left',

                }],     
                
            };
            Plotly.newPlot('Figure1', Figure1_chart_data, Figure1_chart_layout, {displayModeBar: false});
        

 

            /// Figure2——Sunburst Chart - A Snapshot of Palm Oil's Influence in Everyday Products
            function unpack(rows, key) {
                return rows.map(function(row) { return row[key]; });
            }
            
            const ids = unpack(Figure2_data, 'ids');
            const labels = unpack(Figure2_data, 'labels');
            const parents = unpack(Figure2_data, 'parents');
            const hovertexts = unpack(Figure2_data, 'hovertexts')

            // Initialize an empty object to store node colors
            const nodeColors = {};

            // Initialize color index
            let colorIndex = 0;

            // Predefine an array of color codes for the chart
            const colorArray = [
                "#D0B2BB",
                "#9E6E6A",
                "#B88E94",
            ];


            // Initialize an empty object to track which parents have been assigned colors
            const assignedParents = {};

            // Assign colors to parent categories
            const parentColors = {
                Food: colorArray[colorIndex % colorArray.length],
                "Consumer Products": colorArray[(colorIndex + 1) % colorArray.length],
                "Energy Sector": colorArray[(colorIndex + 2) % colorArray.length]
            };

            // Iterate over 'ids' array
            ids.forEach((id, index) => {
                const parent = parents[index]; // Get corresponding parent for each id
                // Check if parent is empty or undefined
                if (parent === "" || parent === undefined) {
                    // If parent hasn't been assigned a color yet
                    if (!assignedParents[parent]) {
                        // Assign color to the parent node
                        nodeColors[parent] = parentColors[parent];
                        // Mark this parent as assigned
                        assignedParents[parent] = true;
                        // Increment color index
                        colorIndex++;
                    }
                }
            });

            // Iterate over 'ids' array
            ids.forEach((id, index) => {
                // Check if color is already assigned for this id
                if (!(id in nodeColors)) {
                    const parent = parents[index]; // Get corresponding parent for each id
                    // Check if color is assigned for this parent
                    if (nodeColors[parent]) {
                        // If so, lighten the parent's color and assign it to this id
                        const parentColor = chroma(nodeColors[parent]);
                        const lighterColor = parentColor.brighten(0.5).hex();
                        nodeColors[id] = lighterColor;
                    } else {
                        nodeColors[id] = colorArray[colorIndex % colorArray.length];
                        // Increment color index
                        colorIndex++;
                    }
                }
            });
            
            // Map ids to their corresponding colors
            const colors = ids.map(id => nodeColors[id]);



            const Figure2_chart_data =[{
                type: "sunburst",
                ids: ids,
                labels: labels,
                parents: parents,
                hovertext: hovertexts,
                hovertemplate: '<b>%{label}</b><br>%{customdata}<extra></extra>',
                customdata: hovertexts, 
                maxdepth: 2,
                textposition: 'inside',
                insidetextorientation: 'radial',
                marker: {
                    colors: colors,  
                },
            }];


            
            const Figure2_chart_layout = {
                title: {
                    text: "Figure 2: A Snapshot of Palm Oil's Influence in Everyday Products",
                    font: {
                        size: 13,
                        color: '#9E6E6A',
                        family: 'Nunito Sans, sans-serif'
                    },
                    x: 0.02,
                    y: 0.95
                },

                margin: {l: 0, r: 0, b: 100, t:80},
                plot_bgcolor: '#C9BCD9',
                paper_bgcolor: '#C9BCD9',

                annotations: [{
                    text: 'Source 2: <a href="https://www.worldwildlife.org/pages/which-everyday-products-contain-palm-oil" target="_blank" rel="noopener noreferrer" style="color:#9E6E6A;text-decoration:underline;">Which Everyday Products Contain Palm Oil?</a> by World Wild Life <br>& <a href="https://productswithoutpalmoil.com/palm-oil-products/" target="_blank" rel="noopener noreferrer" style="color:#9E6E6A;text-decoration:underline;">What Types of Products is Palm Oil In </a> by Products without Palm Oil',
                    font: {
                        size: 13,
                        color: '#9E6E6A',
                        family: 'Nunito Sans, sans-serif',
                        lineheight: 1.4
                    },
                    x: 0.018,
                    y: -0.16,
                    xanchor:"left",
                    showarrow: false,
                    xref: 'paper',
                    yref: 'paper',
                    align: 'left',
                }],   

                hoverlabel: {
                    font: { size: 10 }, 
                    align: 'left', 
                },

            
            }
            
            Plotly.newPlot('Figure2', Figure2_chart_data, Figure2_chart_layout, {displayModeBar: false});

    });    
    
});   