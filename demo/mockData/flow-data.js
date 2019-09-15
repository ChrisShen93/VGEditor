export default {
  node: [
    {
      id: '1871',
      name: '开始',
      type: 'start',
      config: null
    },
    {
      id: '1872',
      name: '需求申请',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: 'reporter',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '2'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '1'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '2'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '0'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '2'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '0'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '2'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '0'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '1'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '2'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '2'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '2'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '2'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '2'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1873',
      name: '提交产品',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_xqa75lu0j',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1874,
        else: 1898
      }
    },
    {
      id: '1874',
      name: '产品确认',
      type: 'input',
      config: {
        beforeAction: {
          type: 'input',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '2'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '3'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '4'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '6'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '7'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '9'
                  }
                ],
                default: {
                  role: '1009',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '1'
                  }
                ],
                default: {
                  role: '1010',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '5'
                  }
                ],
                default: {
                  role: '1012',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '8'
                  }
                ],
                default: {
                  role: '1015',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '10'
                  }
                ],
                default: {
                  role: '1013',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              }
            ],
            notice: []
          },
          default: {
            enable: 1,
            role: '',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '2'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '0'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '0'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '0'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '2'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 1,
            timeout: '9999',
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: '1010,1011,1012,1013,1014,1015'
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1875',
      name: '信息判断',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_mdi6cqcu7',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1876,
        else: 1872
      }
    },
    {
      id: '1876',
      name: '产品评估',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: 'last_handler',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '0'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '2'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '0'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '2'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1877',
      name: '正常开发',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_37m83ceug',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1878,
        else: 1889
      }
    },
    {
      id: '1878',
      name: '方案设计',
      type: 'input',
      config: {
        beforeAction: {
          type: 'input',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '1'
                  }
                ],
                default: {
                  role: '1010',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '4'
                  }
                ],
                default: {
                  role: '1011',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '3'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '5'
                  }
                ],
                default: {
                  role: '1012',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '9'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '10'
                  }
                ],
                default: {
                  role: '1013',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '6'
                  }
                ],
                default: {
                  role: '1014',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '7'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '8'
                  }
                ],
                default: {
                  role: '1015',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              }
            ],
            notice: []
          },
          default: {
            enable: 1,
            role: '',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '1'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '2'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '1'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '1'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '1'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '1'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '1'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '2'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 1,
            timeout: '999',
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: '1017'
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1879',
      name: '方案确认',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: 'reporter',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '1'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '1'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '2'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '1'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '1'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '1'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '2'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '1'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '1'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1880',
      name: '方案可行',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_nqwijmf9s',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1881,
        else: 1878
      }
    },
    {
      id: '1881',
      name: '产品排期',
      type: 'input',
      config: {
        beforeAction: {
          type: 'input',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '1'
                  }
                ],
                default: {
                  role: '1010',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '4'
                  }
                ],
                default: {
                  role: '1011',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '3'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '5'
                  }
                ],
                default: {
                  role: '1012',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '9'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '10'
                  }
                ],
                default: {
                  role: '1013',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '6'
                  }
                ],
                default: {
                  role: '1014',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '7'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '8'
                  }
                ],
                default: {
                  role: '1015',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              }
            ],
            notice: []
          },
          default: {
            enable: 1,
            role: '',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '1'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '1'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '2'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '1'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '1'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '1'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '1'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '1'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '1'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '1'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '1'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1882',
      name: '产品验收',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: 'last_handler',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '1'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '0'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '2'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '0'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '2'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '1'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1883',
      name: '产品验收',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_hc4a79mul',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1884,
        else: 1881
      }
    },
    {
      id: '1884',
      name: '提交人验收',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: 'reporter',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '1'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '2'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '0'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '1'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '0'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '1'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '2'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '1'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1885',
      name: '提交人验收',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_w853tr799',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1886,
        else: 1881
      }
    },
    {
      id: '1886',
      name: '版本验收',
      type: 'input',
      config: {
        beforeAction: {
          type: 'admin',
          admin: {
            enable: 0,
            role: '1009',
            dealer: '1005',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: '',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '1'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '0'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '1'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '2'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '0'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '2'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '1'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '1'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1887',
      name: '版本验收',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_0daxvc3l7',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1888,
        else: 1881
      }
    },
    {
      id: '1888',
      name: '结束',
      type: 'end',
      config: null
    },
    {
      id: '1889',
      name: '定制开发',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_37m83ceug',
            value: '4',
            type: 'isEqual'
          }
        ],
        out: 1890,
        else: 1888
      }
    },
    {
      id: '1890',
      name: '完善定制信息',
      type: 'input',
      config: {
        beforeAction: {
          type: 'input',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '1'
                  }
                ],
                default: {
                  role: '1010',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '4'
                  }
                ],
                default: {
                  role: '1011',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '3'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '5'
                  }
                ],
                default: {
                  role: '1012',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '9'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '10'
                  }
                ],
                default: {
                  role: '1013',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '6'
                  }
                ],
                default: {
                  role: '1014',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '7'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '8'
                  }
                ],
                default: {
                  role: '1015',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              }
            ],
            notice: []
          },
          default: {
            enable: 1,
            role: 'last_handler',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '2'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '1'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '1'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '2'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '1'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '2'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '1'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '1'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '1'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '1'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '2'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1891',
      name: '销售确认',
      type: 'input',
      config: {
        beforeAction: {
          type: 'admin',
          admin: {
            enable: 0,
            role: 'last_handler',
            dealer: '1006',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: '',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '1'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '2'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '1'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '1'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '1'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '2'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '2'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '1'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1892',
      name: '销售确认',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_tzsw1u78h',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1893,
        else: 1890
      }
    },
    {
      id: '1893',
      name: '研发确认',
      type: 'input',
      config: {
        beforeAction: {
          type: 'input',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '1'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '3'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '4'
                  }
                ],
                default: {
                  role: '1016',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '5'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '6'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '9'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '10'
                  }
                ],
                default: {
                  role: '1017',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              },
              {
                type: 'default',
                condition: [
                  {
                    conjunction: null,
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '7'
                  },
                  {
                    conjunction: 'or',
                    type: 'isEqual',
                    key: 'SelectWidget_s1cog7if9',
                    value: '8'
                  }
                ],
                default: {
                  role: '1018',
                  notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                admin: {
                  role: '',
                  dealer: '',
                  admin_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ],
                  operator_notice: [
                    {
                      template: '',
                      notice_type: []
                    }
                  ]
                },
                value: ''
              }
            ],
            notice: []
          },
          default: {
            enable: 1,
            role: '',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '1'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '2'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '1'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '1'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '1'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '2'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '1'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1894',
      name: '研发确认',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_ibe8hu3vc',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1895,
        else: 1890
      }
    },
    {
      id: '1895',
      name: '商务完善信息',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: '1007',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '1'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '0'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '1'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '2'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '1'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '2'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '0'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '1'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '0'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '0'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '1'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '0'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '0'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '0'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '2'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1896',
      name: '总经理确认',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: '1008',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '1'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '2'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '1'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '1'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '1'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '1'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '1'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '1'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '2'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '1'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '1'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '1'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1897',
      name: '总经理确认',
      type: 'exclusiveChoice',
      config: {
        condition: [
          {
            key: 'RadioWidget_1jkxf4l32',
            value: '1',
            type: 'isEqual'
          }
        ],
        out: 1878,
        else: 1890
      }
    },
    {
      id: '1898',
      name: '售前存档',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: 'last_handler',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '2'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '2'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '0'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '2'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '0'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '2'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '0'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '0'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '2'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '2'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '2'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '2'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '2'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '2'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    },
    {
      id: '1899',
      name: '售前专家评估',
      type: 'input',
      config: {
        beforeAction: {
          type: 'default',
          admin: {
            enable: 0,
            role: '',
            dealer: '',
            admin_notice: [],
            operator_notice: []
          },
          input: {
            enable: 0,
            condition: [],
            notice: []
          },
          default: {
            enable: 1,
            role: '1009',
            notice: []
          }
        },
        action: {
          input: {
            FileWidget_63h3o0p1y: {
              element_id: 'FileWidget_63h3o0p1y',
              privilege: '0'
            },
            FileWidget_9pbdx0o4g: {
              element_id: 'FileWidget_9pbdx0o4g',
              privilege: '0'
            },
            FileWidget_ob3m53v68: {
              element_id: 'FileWidget_ob3m53v68',
              privilege: '1'
            },
            InputWidget_23gt6xd7p: {
              element_id: 'InputWidget_23gt6xd7p',
              privilege: '0'
            },
            InputWidget_4cxu459sn: {
              element_id: 'InputWidget_4cxu459sn',
              privilege: '0'
            },
            InputWidget_4m080cha1: {
              element_id: 'InputWidget_4m080cha1',
              privilege: '0'
            },
            InputWidget_6o1ebv6po: {
              element_id: 'InputWidget_6o1ebv6po',
              privilege: '0'
            },
            InputWidget_77hraq68m: {
              element_id: 'InputWidget_77hraq68m',
              privilege: '0'
            },
            InputWidget_7dj0qcxse: {
              element_id: 'InputWidget_7dj0qcxse',
              privilege: '1'
            },
            InputWidget_9msmmvx0t: {
              element_id: 'InputWidget_9msmmvx0t',
              privilege: '0'
            },
            InputWidget_a9zu1vgt8: {
              element_id: 'InputWidget_a9zu1vgt8',
              privilege: '0'
            },
            InputWidget_h1xihhx34: {
              element_id: 'InputWidget_h1xihhx34',
              privilege: '0'
            },
            InputWidget_h89wcs795: {
              element_id: 'InputWidget_h89wcs795',
              privilege: '0'
            },
            InputWidget_k2g7ax81k: {
              element_id: 'InputWidget_k2g7ax81k',
              privilege: '0'
            },
            InputWidget_mqpf7d4fs: {
              element_id: 'InputWidget_mqpf7d4fs',
              privilege: '0'
            },
            InputWidget_mvomgzwir: {
              element_id: 'InputWidget_mvomgzwir',
              privilege: '1'
            },
            InputWidget_ntze531cp: {
              element_id: 'InputWidget_ntze531cp',
              privilege: '0'
            },
            InputWidget_r2nxspzl2: {
              element_id: 'InputWidget_r2nxspzl2',
              privilege: '0'
            },
            InputWidget_rr3x65je5: {
              element_id: 'InputWidget_rr3x65je5',
              privilege: '0'
            },
            InputWidget_zf0knnkgx: {
              element_id: 'InputWidget_zf0knnkgx',
              privilege: '0'
            },
            RadioWidget_0daxvc3l7: {
              element_id: 'RadioWidget_0daxvc3l7',
              privilege: '0'
            },
            RadioWidget_0eb3uqa1c: {
              element_id: 'RadioWidget_0eb3uqa1c',
              privilege: '1'
            },
            RadioWidget_1jkxf4l32: {
              element_id: 'RadioWidget_1jkxf4l32',
              privilege: '0'
            },
            RadioWidget_37m83ceug: {
              element_id: 'RadioWidget_37m83ceug',
              privilege: '0'
            },
            RadioWidget_cafeib3gc: {
              element_id: 'RadioWidget_cafeib3gc',
              privilege: '2'
            },
            RadioWidget_hc4a79mul: {
              element_id: 'RadioWidget_hc4a79mul',
              privilege: '0'
            },
            RadioWidget_ibe8hu3vc: {
              element_id: 'RadioWidget_ibe8hu3vc',
              privilege: '0'
            },
            RadioWidget_jigt7na8k: {
              element_id: 'RadioWidget_jigt7na8k',
              privilege: '0'
            },
            RadioWidget_mdi6cqcu7: {
              element_id: 'RadioWidget_mdi6cqcu7',
              privilege: '0'
            },
            RadioWidget_nqwijmf9s: {
              element_id: 'RadioWidget_nqwijmf9s',
              privilege: '0'
            },
            RadioWidget_tzsw1u78h: {
              element_id: 'RadioWidget_tzsw1u78h',
              privilege: '0'
            },
            RadioWidget_w853tr799: {
              element_id: 'RadioWidget_w853tr799',
              privilege: '0'
            },
            RadioWidget_xqa75lu0j: {
              element_id: 'RadioWidget_xqa75lu0j',
              privilege: '1'
            },
            RichTextWidget_3nnqipsai: {
              element_id: 'RichTextWidget_3nnqipsai',
              privilege: '0'
            },
            RichTextWidget_52ampt8fh: {
              element_id: 'RichTextWidget_52ampt8fh',
              privilege: '0'
            },
            RichTextWidget_an83fcbve: {
              element_id: 'RichTextWidget_an83fcbve',
              privilege: '1'
            },
            RichTextWidget_bbbvog5ve: {
              element_id: 'RichTextWidget_bbbvog5ve',
              privilege: '1'
            },
            RichTextWidget_rvhv27q53: {
              element_id: 'RichTextWidget_rvhv27q53',
              privilege: '1'
            },
            SelectWidget_s1cog7if9: {
              element_id: 'SelectWidget_s1cog7if9',
              privilege: '1'
            },
            TimeWidget_udtybpg6f: {
              element_id: 'TimeWidget_udtybpg6f',
              privilege: '0'
            }
          },
          grab_timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          timeout: {
            enable: 0,
            timeout: 10,
            timeout_unit: 'hour',
            timeout_action: {
              notice: []
            }
          },
          transfer: {
            enable: 0,
            timeout: 4,
            timeout_unit: 'hour',
            notice: [],
            approve_notice: [],
            role: ''
          },
          cooperate: {
            enable: 0,
            notice: [],
            role: ''
          },
          repulse: {
            enable: 1,
            notice: []
          },
          suspend: {
            enable: 0,
            approve: 0,
            role: '',
            notice: []
          }
        },
        afterAction: {
          notice: {
            enable: 0,
            notice: []
          },
          push: {
            enable: 0,
            push: {
              url: ''
            }
          }
        }
      }
    }
  ],
  link: [
    {
      from: '1871',
      to: '1872'
    },
    {
      from: '1872',
      to: '1873'
    },
    {
      from: '1873',
      to: '1874'
    },
    {
      from: '1873',
      to: '1898'
    },
    {
      from: '1874',
      to: '1875'
    },
    {
      from: '1898',
      to: '1899'
    },
    {
      from: '1875',
      to: '1876'
    },
    {
      from: '1875',
      to: '1872'
    },
    {
      from: '1899',
      to: '1874'
    },
    {
      from: '1876',
      to: '1877'
    },
    {
      from: '1877',
      to: '1878'
    },
    {
      from: '1877',
      to: '1889'
    },
    {
      from: '1878',
      to: '1879'
    },
    {
      from: '1889',
      to: '1890'
    },
    {
      from: '1889',
      to: '1888'
    },
    {
      from: '1879',
      to: '1880'
    },
    {
      from: '1890',
      to: '1891'
    },
    {
      from: '1880',
      to: '1881'
    },
    {
      from: '1880',
      to: '1878'
    },
    {
      from: '1891',
      to: '1892'
    },
    {
      from: '1881',
      to: '1882'
    },
    {
      from: '1892',
      to: '1893'
    },
    {
      from: '1892',
      to: '1890'
    },
    {
      from: '1882',
      to: '1883'
    },
    {
      from: '1893',
      to: '1894'
    },
    {
      from: '1883',
      to: '1884'
    },
    {
      from: '1883',
      to: '1881'
    },
    {
      from: '1894',
      to: '1895'
    },
    {
      from: '1894',
      to: '1890'
    },
    {
      from: '1884',
      to: '1885'
    },
    {
      from: '1895',
      to: '1896'
    },
    {
      from: '1885',
      to: '1886'
    },
    {
      from: '1885',
      to: '1881'
    },
    {
      from: '1896',
      to: '1897'
    },
    {
      from: '1886',
      to: '1887'
    },
    {
      from: '1897',
      to: '1878'
    },
    {
      from: '1897',
      to: '1890'
    },
    {
      from: '1887',
      to: '1888'
    },
    {
      from: '1887',
      to: '1881'
    }
  ]
}
