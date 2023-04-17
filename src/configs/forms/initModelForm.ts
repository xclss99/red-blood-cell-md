export const initModelFormSettings: Form.Settings = {
  title: 'Init Model Params',
  params: [
    {
      name: 'd0_water',
      explain: 'Distance between water particles in the initial configuration',
      type: 'number',
      defaultValue: 2.7,
      step: 0.1,
      range: {
        min: 1,
        max: 10
      }
    },
    {
      name: 'd0_vesicle',
      explain: 'Particle distance',
      type: 'number',
      defaultValue: 0.97,
      step: 0.01,
      range: {
        min: 0.01,
        max: 1
      }
    },
    {
      name: 'D_vesicle',
      explain: 'Distance between the bilayer membrane particles',
      type: 'number',
      defaultValue: 50,
      step: 1,
      range: {
        min: 1,
        max: 100
      }
    },
    // {
    //   name: 'R_vesicle',
    //   explain: 'Diameter of the vesicle in initial configuration',
    //   type: 'expression',
    //   expression: (d) => d / 2
    // },
    {
      name: 'gap',
      explain: 'Gap between bilayer and spectrin network in initial configuration',
      type: 'number',
      defaultValue: 2,
      step: 1,
      range: {
        min: 1,
        max: 10
      }
    },
    // {
    //   name: 'D_network',
    //   explain: 'Diameter of Spectrin Network in initial configuration',
    //   type: 'expression',
    //   expression: (d, g) => d - g * 2
    // },
    {
      name: 'b',
      explain: 'Extra space between box boundary and vesicle',
      type: 'number',
      defaultValue: 10,
      step: 1,
      range: {
        min: 1,
        max: 100
      }
    },
    {
      name: 'n_bead',
      explain: 'Number of beads between nodes of spectrin network, * needs to be an odd number',
      type: 'number',
      defaultValue: 11,
      step: 1,
      range: {
        min: 1,
        max: 100
      }
    },
    {
      name: 'd0_network',
      explain: 'Distance between the nodes in the initial configuration or A-A distance',
      type: 'number',
      defaultValue: 9,
      step: 1,
      range: {
        min: 1,
        max: 100
      }
    },
    {
      name: 'shape',
      explain: 'Shape of bilayer particles, * no need to change this',
      type: 'numberArray',
      defaultValue: [1, 1, 1],
      step: 0.01,
      range: {
        min: 0.01,
        max: 1
      },
      isConst: true
    }
  ]
}
