export type Presale = {
  version: '0.1.0'
  name: 'presale'
  constants: [
    {
      name: 'MINT_SEED'
      type: 'bytes'
      value: '[109, 105, 110, 116]'
    }
  ]
  instructions: [
    {
      name: 'initialize'
      accounts: [
        {
          name: 'signer'
          isMut: true
          isSigner: true
        },
        {
          name: 'launcher'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'args'
          type: {
            defined: 'InitArgs'
          }
        }
      ]
    },
    {
      name: 'setAdmin'
      accounts: [
        {
          name: 'launcher'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        }
      ]
      args: [
        {
          name: 'args'
          type: {
            defined: 'SetAdminArgs'
          }
        }
      ]
    },
    {
      name: 'setFeePool'
      accounts: [
        {
          name: 'launcher'
          isMut: true
          isSigner: false
        },
        {
          name: 'authority'
          isMut: false
          isSigner: true
        }
      ]
      args: [
        {
          name: 'args'
          type: {
            defined: 'SetFeePoolArgs'
          }
        }
      ]
    },
    {
      name: 'initializeLaunchpad'
      accounts: [
        {
          name: 'owner'
          isMut: true
          isSigner: true
        },
        {
          name: 'userLaunchCounter'
          isMut: true
          isSigner: false
        },
        {
          name: 'launcher'
          isMut: false
          isSigner: false
        },
        {
          name: 'launchpad'
          isMut: true
          isSigner: false
        },
        {
          name: 'metadata'
          isMut: true
          isSigner: false
        },
        {
          name: 'mint'
          isMut: true
          isSigner: false
        },
        {
          name: 'destination'
          isMut: true
          isSigner: false
        },
        {
          name: 'presaleTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'reserveTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'presaleTreasury'
          isMut: true
          isSigner: false
        },
        {
          name: 'protoolFeePool'
          isMut: true
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenMetadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'args'
          type: {
            defined: 'InitializeLaunchpadArgs'
          }
        }
      ]
    },
    {
      name: 'purchase'
      accounts: [
        {
          name: 'signer'
          isMut: true
          isSigner: true
        },
        {
          name: 'launchpad'
          isMut: true
          isSigner: false
        },
        {
          name: 'presaleTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'mint'
          isMut: false
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'launcher'
          isMut: true
          isSigner: false
        },
        {
          name: 'presaleTreasury'
          isMut: true
          isSigner: false
        },
        {
          name: 'protoolFeePool'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'args'
          type: {
            defined: 'PurchaseArgs'
          }
        }
      ]
    },
    {
      name: 'sell'
      accounts: [
        {
          name: 'signer'
          isMut: true
          isSigner: true
        },
        {
          name: 'launcher'
          isMut: true
          isSigner: false
        },
        {
          name: 'protoolFeePool'
          isMut: true
          isSigner: false
        },
        {
          name: 'launchpad'
          isMut: true
          isSigner: false
        },
        {
          name: 'presaleTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'mint'
          isMut: false
          isSigner: false
        },
        {
          name: 'userTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'presaleTreasury'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'args'
          type: {
            defined: 'SellArgs'
          }
        }
      ]
    },
    {
      name: 'initializePool'
      accounts: [
        {
          name: 'launcher'
          isMut: true
          isSigner: false
        },
        {
          name: 'protoolFeePool'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'amm'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammAuthority'
          isMut: false
          isSigner: false
        },
        {
          name: 'ammOpenOrders'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammLpMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammCoinMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'ammPcMint'
          isMut: false
          isSigner: false
        },
        {
          name: 'ammCoinVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammPcVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammTargetOrders'
          isMut: true
          isSigner: false
        },
        {
          name: 'ammConfig'
          isMut: false
          isSigner: false
        },
        {
          name: 'createFeeDestination'
          isMut: true
          isSigner: false
        },
        {
          name: 'marketProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'market'
          isMut: false
          isSigner: false
        },
        {
          name: 'userWallet'
          isMut: true
          isSigner: true
        },
        {
          name: 'userTokenCoin'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenPc'
          isMut: true
          isSigner: false
        },
        {
          name: 'userTokenLp'
          isMut: true
          isSigner: false
        },
        {
          name: 'presaleTreasury'
          isMut: true
          isSigner: false
        },
        {
          name: 'reserveTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'launchpad'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'sysvarRent'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'nonce'
          type: 'u8'
        },
        {
          name: 'openTime'
          type: 'u64'
        }
      ]
    }
  ]
  accounts: [
    {
      name: 'launcher'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'feePool'
            type: 'publicKey'
          },
          {
            name: 'admin'
            type: 'publicKey'
          }
        ]
      }
    },
    {
      name: 'launchpad'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'owner'
            type: 'publicKey'
          },
          {
            name: 'mint'
            type: 'publicKey'
          },
          {
            name: 'presaleState'
            type: {
              defined: 'PresaleState'
            }
          }
        ]
      }
    },
    {
      name: 'userLaunchCounter'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'owner'
            type: 'publicKey'
          },
          {
            name: 'counter'
            type: 'u64'
          }
        ]
      }
    }
  ]
  types: [
    {
      name: 'InitArgs'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'admin'
            type: 'publicKey'
          },
          {
            name: 'feePool'
            type: 'publicKey'
          }
        ]
      }
    },
    {
      name: 'InitTokenMetadata'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'name'
            type: 'string'
          },
          {
            name: 'symbol'
            type: 'string'
          },
          {
            name: 'uri'
            type: 'string'
          },
          {
            name: 'decimals'
            type: 'u8'
          }
        ]
      }
    },
    {
      name: 'InitializeLaunchpadArgs'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'counter'
            type: 'u64'
          },
          {
            name: 'metadata'
            type: {
              defined: 'InitTokenMetadata'
            }
          }
        ]
      }
    },
    {
      name: 'PurchaseArgs'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'counter'
            type: 'u64'
          },
          {
            name: 'amount'
            type: 'u64'
          }
        ]
      }
    },
    {
      name: 'SellArgs'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'counter'
            type: 'u64'
          },
          {
            name: 'amount'
            type: 'u64'
          }
        ]
      }
    },
    {
      name: 'SetAdminArgs'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'admin'
            type: 'publicKey'
          }
        ]
      }
    },
    {
      name: 'SetFeePoolArgs'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'feePool'
            type: 'publicKey'
          }
        ]
      }
    },
    {
      name: 'PresaleState'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'Open'
          },
          {
            name: 'InProgress'
          },
          {
            name: 'Completed'
          }
        ]
      }
    }
  ]
  errors: [
    {
      code: 6000
      name: 'InvalidAdmin'
      msg: 'Invalid Admin'
    },
    {
      code: 6001
      name: 'InvalidOwner'
      msg: 'Invalid Token Owner'
    },
    {
      code: 6002
      name: 'InvalidLaunchpadOwner'
      msg: 'Invalid Launchpad Owner'
    },
    {
      code: 6003
      name: 'InvalidFeePool'
      msg: 'Invalid Fee Pool'
    },
    {
      code: 6004
      name: 'LaunchpadNotInProgress'
      msg: 'Presale Not In Progress'
    },
    {
      code: 6005
      name: 'NotEnoughBalance'
      msg: 'Not Enough Balance For Presale'
    },
    {
      code: 6006
      name: 'NotEnoughSOL'
      msg: 'Not Enough Sol For Pool Creation'
    },
    {
      code: 6007
      name: 'MaxBuyExceeded'
      msg: 'Max 1 Sol Limit Exceeded'
    },
    {
      code: 6008
      name: 'InvalidCounter'
      msg: 'Invalid counter'
    },
    {
      code: 6009
      name: 'InvalidATA'
      msg: 'Invalid associated token account'
    },
    {
      code: 6010
      name: 'InitializedATA'
      msg: 'Already initialized ata'
    },
    {
      code: 6011
      name: 'InvalidMint'
      msg: 'Invalid mint'
    },
    {
      code: 6012
      name: 'InvalidTokenAccount'
      msg: 'Invalid token account'
    },
    {
      code: 6013
      name: 'InvalidLaunchpadMint'
      msg: 'Invalid token mint'
    }
  ]
}

export const IDL: Presale = {
  version: '0.1.0',
  name: 'presale',
  constants: [
    {
      name: 'MINT_SEED',
      type: 'bytes',
      value: '[109, 105, 110, 116]',
    },
  ],
  instructions: [
    {
      name: 'initialize',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'launcher',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'InitArgs',
          },
        },
      ],
    },
    {
      name: 'setAdmin',
      accounts: [
        {
          name: 'launcher',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'SetAdminArgs',
          },
        },
      ],
    },
    {
      name: 'setFeePool',
      accounts: [
        {
          name: 'launcher',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'SetFeePoolArgs',
          },
        },
      ],
    },
    {
      name: 'initializeLaunchpad',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userLaunchCounter',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'launcher',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'launchpad',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'metadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destination',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'presaleTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reserveTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'presaleTreasury',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protoolFeePool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenMetadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'InitializeLaunchpadArgs',
          },
        },
      ],
    },
    {
      name: 'purchase',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'launchpad',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'presaleTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'launcher',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'presaleTreasury',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protoolFeePool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'PurchaseArgs',
          },
        },
      ],
    },
    {
      name: 'sell',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'launcher',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protoolFeePool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'launchpad',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'presaleTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'presaleTreasury',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'args',
          type: {
            defined: 'SellArgs',
          },
        },
      ],
    },
    {
      name: 'initializePool',
      accounts: [
        {
          name: 'launcher',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'protoolFeePool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'amm',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'ammOpenOrders',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammLpMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammCoinMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'ammPcMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'ammCoinVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammPcVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammTargetOrders',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'ammConfig',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'createFeeDestination',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'marketProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'market',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userWallet',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userTokenCoin',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenPc',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenLp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'presaleTreasury',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'reserveTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'launchpad',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'sysvarRent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'nonce',
          type: 'u8',
        },
        {
          name: 'openTime',
          type: 'u64',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'launcher',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'feePool',
            type: 'publicKey',
          },
          {
            name: 'admin',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'launchpad',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'presaleState',
            type: {
              defined: 'PresaleState',
            },
          },
        ],
      },
    },
    {
      name: 'userLaunchCounter',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'counter',
            type: 'u64',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'InitArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'admin',
            type: 'publicKey',
          },
          {
            name: 'feePool',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'InitTokenMetadata',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'symbol',
            type: 'string',
          },
          {
            name: 'uri',
            type: 'string',
          },
          {
            name: 'decimals',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'InitializeLaunchpadArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'counter',
            type: 'u64',
          },
          {
            name: 'metadata',
            type: {
              defined: 'InitTokenMetadata',
            },
          },
        ],
      },
    },
    {
      name: 'PurchaseArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'counter',
            type: 'u64',
          },
          {
            name: 'amount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'SellArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'counter',
            type: 'u64',
          },
          {
            name: 'amount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'SetAdminArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'admin',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'SetFeePoolArgs',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'feePool',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'PresaleState',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Open',
          },
          {
            name: 'InProgress',
          },
          {
            name: 'Completed',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidAdmin',
      msg: 'Invalid Admin',
    },
    {
      code: 6001,
      name: 'InvalidOwner',
      msg: 'Invalid Token Owner',
    },
    {
      code: 6002,
      name: 'InvalidLaunchpadOwner',
      msg: 'Invalid Launchpad Owner',
    },
    {
      code: 6003,
      name: 'InvalidFeePool',
      msg: 'Invalid Fee Pool',
    },
    {
      code: 6004,
      name: 'LaunchpadNotInProgress',
      msg: 'Presale Not In Progress',
    },
    {
      code: 6005,
      name: 'NotEnoughBalance',
      msg: 'Not Enough Balance For Presale',
    },
    {
      code: 6006,
      name: 'NotEnoughSOL',
      msg: 'Not Enough Sol For Pool Creation',
    },
    {
      code: 6007,
      name: 'MaxBuyExceeded',
      msg: 'Max 1 Sol Limit Exceeded',
    },
    {
      code: 6008,
      name: 'InvalidCounter',
      msg: 'Invalid counter',
    },
    {
      code: 6009,
      name: 'InvalidATA',
      msg: 'Invalid associated token account',
    },
    {
      code: 6010,
      name: 'InitializedATA',
      msg: 'Already initialized ata',
    },
    {
      code: 6011,
      name: 'InvalidMint',
      msg: 'Invalid mint',
    },
    {
      code: 6012,
      name: 'InvalidTokenAccount',
      msg: 'Invalid token account',
    },
    {
      code: 6013,
      name: 'InvalidLaunchpadMint',
      msg: 'Invalid token mint',
    },
  ],
}
