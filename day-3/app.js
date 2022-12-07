const arr = [
  "gtZDjBcmpcDgpZcmmbgtdtqmCGVCGGsvhCFCCqvmCMMM",
  "JrhfzfLTNfJhPnhQnfzHfCFFQFSGvMFCGQFsQSMSVs",
  "TllTRrfNNlfzwhtZBZgtRDBp",
  "vMdwjZdjwjvjdTZZvCcQMGnQMQcbcgLLCL",
  "rsVhfmssPWzDVGCLJSbCgPLSQG",
  "lfWNDHDgfszFRTFtwwNjdv",
  "GLPqVqdVGCLCdczjMjzMfzld",
  "JnWQvJDmvWBtlMzhrzfHQgcz",
  "tDtJDDDDtWRRmBwJwWtpPRsGCGScLPGSqspNCS",
  "ChVzZzfNDzNJmBQfjjJfmH",
  "MrTMPMncGMJvPPvPWTbrMWvgmBgQwgdpwmdpdpjwpHQcdw",
  "SPvvvbqrFvMvZzJzsFVzVJNV",
  "mvBbvMFqbMMVVmtCBHpDdDPTDspdNWPDVP",
  "zjSfftcQtwtSfQSpNDppsNsjPNdRPP",
  "fgfStJShrgvvCLLv",
  "GmFnNNwbFFbhQQGQnGwwwfBgnMMqVDBZVVBMfMVzVz",
  "vWzRRHzTHcgfZDVfBgfH",
  "SSTvrvRcPpcvjFGwNGbNpbwQwz",
  "FFgbZZFZgFmpstLgmbtzqNrwVPlMPlSWWrMPNp",
  "QQhTvjhcvjjvTcTcTfCcSRwwWzwzPMrzWNNWVVhwrwWq",
  "GRQBfCRnGGTcDvBfGvffCCjnFZtFFgStJLbLHbFLJZdgmd",
  "pppdjcrMMRDJLJdRcwRDrwssqHGGDHsZHHsvBVtvmVHV",
  "nlCFWzGzzQFlSlhGWnPzFbSsBZmsssmVVmsBvnHqvNVqqm",
  "lFTTTCSQSTrdGJJLJG",
  "jpsGMgsmghQwQsMmhlQshjtTNTRTnFqRWnnqRfFnnt",
  "SLBCHrcvZHbSvSZrSvSWnfvVNvftVlFRTqnRTq",
  "JrzdZbBcHBCrrlHrrSsMgmGpJPDPQmpgQgPG",
  "cmcZHgwgMgHSLmtjLfWPNNrWBNfffp",
  "JTqGTsClHslVVRVCVGVJGnBrjdnnrdBNvjPNBNBrWvnW",
  "VVlQlqTFJlzzlsVGsRCZMthHDbwbFhgcbwHchg",
  "qgZjgjjbssqgsjlNqjhTtdrfQdTdWLLnDVfHtHWd",
  "zcGMBDDzcLnztfQQQz",
  "JSppJcBScMmMFFBRCpRCMmGlggvjhbhlNlglwbslCZjhDZ",
  "hvhmqcqwwcTBvvwQnRQnRnTRFzFzQz",
  "jWLPPtPsgMtpdLMLWllpgLLQFQhFJjnVrzFrVFhnRzJJrJ",
  "WPWffgtSdspdhSMdlSdtfBbHmSvqbNBCCmcBmcvcCH",
  "frVcrVcggfSZJfbbJvBd",
  "hwWQnwhWQmQmThTSsdvvSMBTBzcb",
  "wGnFFCGlQwntGtCtwntwDmFwRgLrHqNRqqcNNgRrHHLggCjp",
  "wRSwwHDMsRGHvNBNjTgvjgJD",
  "mcLcFCclWQWQpPQWVQcQcvvNJjrNBTrvgJgBvTRvCg",
  "VFPbQLchQLSRfbMtdHGH",
  "lfVrhnlRRqrJZVDJdHSWCvJCJSbj",
  "BFsgcgMNNQgSvbfCff",
  "ffNPcMtzqPlnmRGh",
  "ZJplFmRJmWRJRWmTJCvtTtnLCtndCqtqnr",
  "SQsVPQHBQZNSNSLCfSLrcLcrrr",
  "VMjPjbNMDsVHmRllmZpZWmjh",
  "LcTLRbJhhdhLJbbclfVvfWQVWFRWFFfq",
  "rZNttSNvtgsPPFsqBFPWQF",
  "HGCSmHrrwNnHGMLpDhbzzpmJJv",
  "VlSWzRtWSJqWdfhdqBdF",
  "mTDHsmmmcHpgrCgCrTsMMtqfsFNsZqfdMZMNbd",
  "TDcpvrpHCprCpHrmcQvTHgTQzSnLJnPPJlLzwJtRVJwLjJ",
  "vZSWZJZJFvhZldZHdvvlphZSNGNnmzwCPNHNHGNrrRHGCPmP",
  "bjfgcbjTQTFQBnGRRBCBNwBnCz",
  "csqscsbssQLsgQcLgLQLQTQpFdlhdvdZdpZWhJplShWWtq",
  "QgQvHnfflfBwQCfwlfglnQQccNcRqGGcjmcsGjddwdzsJc",
  "DhZbTLZTDMVTsRzsqsRjszTz",
  "FSZVtMLMMWbSgqSvPQlnpH",
  "MMPllnnBmfSHvBgCLf",
  "whZjGRJdjcNjjhRjCvgCfbSvCZLHfpZs",
  "RRWGWwNRWwhwclmrgFmngFPMWm",
  "VVHQGDGDGsdRrmZBQZRCVHZCNcSTTPMwwvTTwSSNqBqvgMvN",
  "nfhdLfjFnJpblLbJjWhtnjWPScNnwSTPTPqTvgngNNvSvS",
  "fpWljtpLjflfLfzlhZGQHZQVddHrrQRDRz",
  "VCHCjwCwMSZSqQzhhQqcWZJD",
  "GGGrFFgNRNNgmfnTdgmWQpczvPvQPWQJGDpzzc",
  "lgTttRTgmfNRntrTTngrCbjCwJCHjLBBHlMVMsbB",
  "szgPPlCblggVszhLmzvcvNrqpjNqmrqqpGvG",
  "wBQDtBfQDtFvLjjctLqTMr",
  "ZFWWdDLQFwSfDSBSQQBWnnnQVdbhgRVbsHzsshbClzzCVggb",
  "VpVsHVcqcMVMMNHpsspstbMqzBztJZTBBfJfzTvZfvWJWSTv",
  "mDDQgCQQQHdrwgSvZSmJJZvWfJJf",
  "drCjggDlPdgrlbjNcnhcHsbpsj",
  "cNNDRRpDcNcTpppsqHLQGLfRLvHzLH",
  "lFntJjtbFFlsmsjvnGqHWLfhfqzzQh",
  "sgPbjBJtPgbPJblblJgbgbwdBTwDCwpwrdZZVcCcDppc",
  "GGclMjLnnjCMchcChLMLcnnzRFJDZJSRSzzzzDSShszPRS",
  "VHgFQgwVwfNNpQVfHzQsPPPJDbmZbJDJbS",
  "HfNVWdHVvgHgVWVNppNWVHwTlvBFcClBCjcTLTlBnnLrTL",
  "GTLdlJhffQwDRvWLrp",
  "HVZVNjjsPqzNjNNmNgDWMrRQpWvWRHrDHBWp",
  "VCqVzjPjCpVqCVPCsbctcnblcGlTbGnlbFJf",
  "flHdfdBNdZcflBMjqMjBNfZQhvJbGvqvsshJQsJCJDWvvD",
  "gFTzRRpzRTwbgbLmtCvsJhWsChrWCrtWCC",
  "VzzzFbVRLPznmRBffPNBHNMdlZfl",
  "FFFMwCqJFFmrRwgnbLrL",
  "GpjGpQHQpfjdjDRnLrbrRQmJzzgg",
  "BphfhDcNcHNvPBvSqJMWJS",
  "NndbWpDBNbjvWLZqWsWQ",
  "JPFFTSPfgcMgftQQGjvTmsGqzssG",
  "gPgcfcVFgcHqSqVhbBCHlpbbpDlhDD",
  "FSdfWFTTBnjsDCjsmrrT",
  "pQzLRVLppLGcQjqbmVDJsChCvCbVsm",
  "qHLRGqqZzGjLqBNMFdnHlNlBFN",
  "DjqbfBTchDjqqCjjCTWNTbdzSVzGZQGBwZnQnVwpSSnQ",
  "ssJlPrtvMsRLrrJQGNZJSpZpGzSG",
  "rlFssHsvPRPMvFmtHvtqjhTgjbqhWqNmNqgDNh",
  "vcpnRqwwLLbvvcGpDQWDFSCgMrWWQWRR",
  "gtNfBfllrFlHrlrl",
  "ZPzftBmsNBNBPJBZPmZPNtmPdGLsqbwqpqcndVLLGpVGvqgV",
  "vRBfQqqBQPfbrFvPBvPbhLDVDVDQZVVtZtlWLLLt",
  "jcJmFFwnhJVZLWVl",
  "sHTcmNNHzncmcjmdsBCrBCPCrBBqCFrqzb",
  "bbZRnGmNnBGGMNRTgCmWWGGSrvSvFHvzFvFQDF",
  "LjwphpdPdLpLJVqfJrQzDzfrvQHSvDcQrQ",
  "DJphdwDsnmbZsTZM",
  "rdNrZNBSzSztnNzWCcNpHlMwlwHWlM",
  "QqLGLJvLjtvQWhgHgchHwHJw",
  "GtjTGtDRqvfLRGnrzsmZmfrVFBrV",
  "TdMhZrTTNvwphcLL",
  "WnnmffmDWnWPsPCJNpNcpNVNQp",
  "fsjbWfFFfnmmDsFDnnflSSdczlMdTHTzTTRRBdtT",
  "cMcPcMcwgWJMjWWhFWCCQCmqCFdh",
  "bSLVLblnNnLbVfnsbSbCChSQdChptpdqZrmCmZ",
  "DLGNfnGVDNDHbfzjRcRgqHMRBJPc",
  "HVFVlVHjzjjlCJjHjCjnvDrggrgLdqzddMqrzz",
  "SSfBTmtNdLqngvrm",
  "TwnNfPWWpBSBNtTHZCGlPHCQJHZHPV",
  "prvccpFQpMcQBwsvssshdwSTPD",
  "qbGHVbNJGqwdPgDrTsDJ",
  "fGbGqqlGGHflqLlzZBBrRcrtrZlp",
  "fCSPhltMBmPmbdgd",
  "DjvJJscvTsHHDbWzBWsWbdwgLB",
  "VVHDZvTppRcJVFFppvvRJDJqMSGqCtZdthttrnthSZMGCr",
  "ZcSrSdrhDjBDDCmZdZmZjhwVHwqVVsMwgswVVwMfhw",
  "PNvzTPNbnzcPbGQNJTvqwsWgVgVMMWpQqwgHpp",
  "JTPGPTzNttnbRTPlPtNNRlFrFmBcmDljjmBFSCmLZZBr",
  "mNvRRCVMtNRdFNtMtBHHprpHgJgJWwpBnprg",
  "LZDDlSLlTslDfbcpJJWndwcscnwr",
  "qdZZGSDhMVRCGtmC",
  "VGFjjgBShGdGzQczcGRG",
  "MppqCDfCMwfLDfvNmrtWstRcMPzRMRsRsPQS",
  "NwDCffLppbqqrqvTBngSbnBHglZllH",
  "vdllJVDzmVDVqvvWvdqJlcWrCsfCsfSSsSJfCSfQQCCbCQ",
  "jnTHZPZHMjZhMjTpHgMpgnbNqBstnfrtSSrBSNssCrfN",
  "LHLTFLjTMTTTwjHhpHTcwmDcWVDlvRDmvqwWlW",
  "rqQsSStdmsdLqlNNPGlGlV",
  "FpFpzJNTcHzRHRHlGwFVLFBLFGVvlw",
  "WCCjWRNJTJWhQhbhrbnd",
  "jsQjfrRTRwzSsRTgNchlnlhqcnlQmQ",
  "dFDtdFBDddHLJpVpHHtVbtHFCWlWlGlNlmGggNqgglmcchqb",
  "dLDHMVdLtBBDBFVJBFthtJHRTvsMSvsTrTSRvPPjPzSwRP",
  "CSPpSrLlrlPrPchLnSlbDbbRttDVhbGRDDJRtD",
  "fzfvmzTMmfsFszsHZsHMHVfwtbjBDDGjtRBjQQGGJb",
  "HmvmTFmqmTsHqzzzzdTsMMScndccdLppnLCSPcCLrVgr",
  "pfMflRnfrnjrpjnFzDpfDMmMLRTLZVTgLsvdZgLLZHSVWZRd",
  "tBGNhwPGcNBBWwZddsSTTPgVLPdT",
  "JwthtwbbhNBQhwhbBCrzpnprnWnprlzWlClD",
  "PPnZZjnFNDjlJJhtMddfTTdD",
  "QGLHFWvQJtzfpvCt",
  "swqSmmQWLQwFWLwwRcqNNBnnbgPqbPNbglVZ",
  "GCLSjjZGZhpvGtBgjJlnJDhhJMVDPnJlJP",
  "mNtQQwNzQRHWdJHnPTsddlln",
  "zQrfmbtNbcQcrzmrRBZqBcvpjSGLZGLZBB",
  "zGNzgsjDssvNbPlWJfJq",
  "RLMVSRMLhCLZSMZHDSJWvpcqfbfhvpJqcWPv",
  "dMVHLFHLZMLRLLFRHHHVZMgDTntgstGwznzGGnzjDFwG",
  "wCLCHLBwzBtQRLHLbNFFfdqdDqVrVfBN",
  "JGvljmgGZvMlfDRRnnnZnfND",
  "GppRlgJlSllSgjMsmllpTjcCLczWztPWPwwwzWThtcQh",
  "WvHbvvWnFHszDRSltcCctCFD",
  "gCmJmCCPTPqpgrZtjdRtDRplcSjS",
  "rJJrQPPJQmrmrhGTznCfLMMbfvWfbCWQ",
  "TqBWtTbFBNNRRtwQpJJvvvZPpTSQ",
  "fRMfsMssrGhSmMwSQvvZJm",
  "VggcVlsCgHnVFnndbbnR",
  "NdrSSWBNPPSWWHPPlwlLZHLZLMhjlLLH",
  "pVptMTgVTzLwZTzlbF",
  "qsRmRJtsMvMqgqgRvCdcSrWSPcWrDmmdBN",
  "nbJnfqWcmCMnSBSHwzWBsHHz",
  "dVpdvdppdptppDlvlHcczSgNcgww",
  "VGTdTVtGtRLFPTDbcfCmmcCQJQjcrT",
  "VTjrjrjTlTjQMdpGrWMSHvSG",
  "wnNJbDmttnwnhNwcJmNGdvWvMSfvMfhSSppSdp",
  "JznFnNsGnzzGFDJsFNmLgVVQZBlLZjQTLTjTls",
  "hpngHwcpWHgjjfhzTJBfBB",
  "RFFbFlQlSdRsbRQQMGPRGdSGjBvvNTvzZMBvjzBBTJTvMBBT",
  "GPSSPDDDFzGlGGRzLzGGPRWqnprcgCHwCHpwHWVcncLV",
  "LLlLGffQLPRThRwP",
  "MpZjbmznWqmqZznmzmpZqZnMRgPBCTPfgRTTwTjhwBPPghjP",
  "VnZpMsMMJnWsmnJpJmzrtFlGQFrHGvSvfHStNV",
  "MQqHMQPnqmpDdTLLRnDjsj",
  "NGFzwgtLBtFFGrrCtzgfgCNgSsdTDSSTsdssjDdSlZRjTSBs",
  "zCwNLthfrbCgzzhqhmccJPhQHVmV",
  "SndBVcgdqcRBRcdPBBcVcQTSSMLMlTssMNMWsHMsLQ",
  "GmJvZvhqpvZtNwwWLTTLwMMm",
  "JFJpzFGZqjvhGZcjBPcCBBPnnVBc",
  "rJWbqTvwvJNbPDPPvLcZvPDp",
  "QMnfBsjmFPLcHRDfPp",
  "lQlMlmtFsMMBstljlnGhtMhmGNqJqTcWNNbWdGwdNNJCrTrq",
  "LcjcNCQNQWDpRDjRTj",
  "vWvszVVSsBGWsTJRFHRJTTSTRJ",
  "vvGbtqbGVVBqtzbqvBdzVLWNLClwnwMLWlQNMfdPQP",
  "TWBZsWrjzZzWBrBsrrsTLNNJvFnJVmlSFFQnGpmnSJJS",
  "qdCggdqqqhhqwhRbCwbCPqhlJFPPGJQVvvvnpVVmPnnFvS",
  "ffgCfghDqDdCsGWZjTsLrsfW",
  "QzQSSQmzSsLQcLmrcsLzccgqCnwqCtZDnDnrZwgnqTTT",
  "hFRHHRPRPMtWPGVPRlMljRPCgWBBDTgJBgnwqTZDBZDWDB",
  "jPjPHRMjjvdjVFhdNfbsbbQfbcddmNtL",
  "jJlTqMqJtdztJqzcSJSlTdSlprLsRRHwcRRrsrHbrnnRHsHL",
  "VVVMWNNWmNmLnPLRHrLp",
  "NGhfvvVWBNfNNCNCQTMqjzgTQBSSSqll",
  "SSSRMRSRpnMRHLqWLfPlDGlGWldD",
  "hbNtlmvrNrsVDWsGPfPfqG",
  "jvbBNmvlJjRcCzHFppCJ",
  "hhWWPjnBGBGnjqBWSnhhsNLllLNcLczJcqcTlLTlfl",
  "FHvFFMHwdmvrDbwCbbvHwdHnZTMLzTNTczflJTZclzNLlLcJ",
  "HdFFvdDvpCDdrnwrGhBQhWRRpsjQWWQW",
  "sBsvtJtdRdjNbWWrTllqlNgg",
  "nSZSnPPZzMSnSlScWWWgrVWCrqgrWMWr",
  "lzSncQcLZLzlwDvtdDdFdFJJhHvJ",
  "lpsTLDlTtFtlWHPDvvgPfgMrQQJM",
  "zmNbzcNjzldjwmbdbhhjcjRgfwrgvMwMMSRJSvQQvrRf",
  "ZhjqcjzNhmzNqBqNznmcWHplCFGnpCtFsGWHHWsH",
  "ZPGQBFHFbhSrHqtfSrSr",
  "nMdznzzMDTnjMQrMWtrMptplqpqS",
  "wzjczJmccTJCmcVghZBJbPBQBbVh",
  "wLLMJbqSBBnnJhbvbFSSRRlztTrHzrrrrd",
  "QNNGVPjWPGVqltTHWCqCdH",
  "sjNGmmGVGgQNGDVmsVpgqQVpMDhvbLwMffZfhZbLnfLLLZwb",
  "gQLcQrMtBPdwSBsSlmBm",
  "TfCpTJnTbfqgsgwgppsSzp",
  "jVbvTnvWfJnJjjbfCjWWjrFPrLMtcDPgLMQQRtgZVF",
  "gwpHvpgwngGHcnvNvgnmsqCzmMzlfqmmqzHHCm",
  "JrdSLdBVPRDtRtPfPPzCJhjqmljzmmqszzsM",
  "SWLDDtVdrZWtSBRZfRcwgFGnpNFpnTnWnTvT",
  "rpcnHrwrhWccNZDDBBgBVCSW",
  "nmzFRRjFmmJQNDJC",
  "qznMlqGnzRtRGvqGFRPrdMhwTpTLfLcppLHp",
  "wthvbmhmChWMRJLJzngZpzLLNC",
  "SsdBVjSTjBdffBFfcSdVHfTrnDZGpQgNZHNnLZGpJngJGLng",
  "sSdTcdVScdcrccjcrBPrBSjcvmRRwlWPhwmqtgWhMPtmMMqR",
  "CJJBdBCrHdBhtRHctBQhRMrBwZpwZWNZNSNTwSNpQWpZsSSW",
  "LVFnvnbDjLsDPsPqFFvPvDnTzSTwNwPZpSmpSpgmgZWNTW",
  "LjlflbFjsvVlrHcrHtrfcChH",
  "tVLJGNRtfBBNGBrfrbzmfhPsrsPC",
  "DWWDQHQgllSFqFzcsJmzzSSzmrrs",
  "MJFQDgMqnHlDvFdGNBNNZGNVVvjV",
  "wnNwGCBBFNWBqjFBnLLGVDHhHmDPHvZTjTvTrPvD",
  "bMbttVScMJQtdgSgstbJRSPmrTHmHmrmmSDZlrPrPDhv",
  "cMbgpsbVbzbdRMRFWLqzBfLGwwwwfW",
  "JpSnGSGpbGgsWWPHJrdfsT",
  "MNsRqNNvMQDTLWHlffNHLN",
  "qqmtRzRvCRRQDqjqjDmsmRpZwSZbcwbnCcCSBBnSSnnC",
  "TWqlqpRqRptqlRhrmtGGzhbSrSdz",
  "VgsBVMvgVZfZvPsMVNvfZfvVbSPdhFPFhbzLhJdGFJmLhhhL",
  "QZgvZgvHwbwHbMsMRllRjDRDnQRqlRjl",
  "fsPQwnHnHLLfnBBnwwGtjTGRWTWTWwhV",
  "jblbdjZFDMbGllqTGTtVlq",
  "gmdMgZMbjpZDcrrDgdmszsPLpQfpBPPnNQNLLz",
  "HRsPPGMhLPMrnPchPSwStjbSttSvtHSqQw",
  "dfsCfpCJVJCvdFBFwStwjj",
  "gTNWmWfTNVZVJzZWpWJgTpfhnDrMnDclgDlDrDRnRcMLDs",
  "ZQZQJMqdwmZvqfPmwRjpBBjHjnshnjtt",
  "zcTPTLDTFWLGTrTSWPcDSSHjRlhRsDhHslslssBRljjj",
  "TrNFLbTWrGNZvmvVQPQV",
  "htfLgmtSLcTWNLcT",
  "slbHlBBGbqRsblBHvdNJJcjFFNBTVWWWcn",
  "bbQsHMMblHrMsGRqvQhwCTQCwtQCzSpfmS",
  "zmqdphmFmSpTzhdqhFmwjjGbtcvDbcGGjllGQjSP",
  "HJFrMCsVLrHRRMCNrVMVnctvstlGcQlPtGGjQtGlvP",
  "RFLHLVWrNgVJzwzwfgffwdfp",
  "vdMjSmMMpmMWhRpndRmZnhvHqLpGHcJGGGDLHHLGcfcLfc",
  "lPBwwrsCgLFggcqqLW",
  "TWszsWNBTNdmSRvjbZZT",
  "zFlBGpzzzLLNjBwPcwwmcNPfWNQn",
  "VHSHRJTJDSVVnmcVVPpWmpnf",
  "DMZHHrDHHrJrrZrShZsHGbMBbFgGjGCgjpFlBzzb",
  "FVMpsvTqvqMssVsWZSrqWFvwlGDGwQzwfwQQNLzDlwlZwf",
  "hPbgBHhJJcJPwCwDpNllCCHC",
  "pnjbBmjgbgmqtSmsTtsF",
  "DHZHmfTmCfjDZHMZmzffHHnQwwTBdQwbSdBGBQwhBQTQww",
  "cqstRFWNtLrNFwdVShlBSlhBRl",
  "StJWpLptNWLtJcpqPrFHDjZzzvnDDHPCZjPvvz",
  "hzffhGVGGhzRqTBLTqHL",
  "sFFFsMQlwJMsmrBFSNHTHNqrTS",
  "pbdsJMdJMJbwbmJJtbTtgnffGgVVChvD",
  "FvJnFnCpQTddSSmFdFpPPsVhppDjBzjDVhDV",
  "RgZMZbsgzlDPlhjb",
  "cHHHRgRZgfHHZGZfHZcLLHrrCrmJCmddrsvdJsmvFFQG",
  "dpJDdZwLnvdvFmFMmHjslMLH",
  "CGCztgPhWCWhzzzNNPGfrrWfmbbsmmHjFHDMsbHMsjFPjbHm",
  "rNQDGzzhCCfNrzrDzChTcZZvQcTRJpTwdvQpVc",
  "VpvNGhGHGNhHbPsbVbvfFtLCzSCFSBsCFSFCLB",
  "MlqJwTnrRRrRnMlQMHfHzHzWFWtmTzLWFC",
  "ljZDDHqqjqRbpNhjNNgcgc",
  "qrQtDzcQzbrcfdbqrQrthtscSsvpvnsSHpTpLpspmsSs",
  "CVwNNVRNBSHsLSFBTv",
  "CVVVNZjlVlGwlGlljNlWJVrrfqbPQQqHqJhhftbfDJqf",
  "lpmrPDPDjPlmWrVzPztZwFjtFbBnRtZbbcRL",
  "dnqJCCgQdNqbqRbRbBLt",
  "QGhGddGCTdMHNTGgshgJhzvSmWWPSsnprpPzWzsWlr",
  "hCJHTdJJNvTdSSNssjvfwgntwDgtgwDGCtZwtRRB",
  "mbllFmFMFbMVWWLpbpZwwBZTZnnVwnTggtDB",
  "MmzLQpFPTmPzHvfJNNzhNs",
  "dzgBwzlgrrBrVLLlwLBgBlgRScDMMDDswMsHZRGDsZGZmM",
  "HPfPbjCFJjCvfnnsjsDDcccmZsRSMc",
  "hCvHfWPPnvJhPWpqNNhqLqzLqLLd",
];

// divide each bag into 2 separate strings
// find the common letter in both
// use that letter to find the value
// add the value to the overall sum
// return the sum

const letterLookup = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

function calc() {
  let sum = 0;

  arr.forEach((bag) => {
    const splitNum = bag.length / 2;
    const string1 = bag.slice(0, splitNum);
    const string2 = bag.slice(splitNum, bag.length);

    for (let i = 0; i < string1.length; i++) {
      for (let j = 0; j < string2.length; j++) {
        if (string1[i] === string2[j]) {
          // match return the letter
          sum += letterLookup[string1[i]];
          return;
        }
      }
    }
  });
  console.log(sum);
}

// calc();

const newArr = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];

// every 3rd line tobe a group

// check the group for the common letter in each

// sum the common letter

function calc2() {
  const p2Arr = [];
  const finalArr = [];
  newArr.forEach((bag, i) => {
    let newString = "";
    if (i % 3 === 0) {
      newString = newArr[i] + " " + newArr[i + 1] + " " + newArr[i + 2];
      p2Arr.push(newString);
    }
  });
  for (let i = 0; i < p2Arr.length; i++) {
    let splitString = p2Arr[i].split(" ");
    let string1 = splitString[0];
    let string2 = splitString[1];
    let string3 = splitString[2];

    let letters = [];
    for (let j = 0; j < string1.length; j++) {
      for (let k = 0; k < string2.length; k++) {
        if (string1[j] === string2[k]) {
          // match return the letter
          //   sum += letterLookup[string1[i]];
          letters.push(string1[j]);
        }
      }
    }
    for (let i = 0; i < string3.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (string3[i] === letters[j]) {
          //   console.log(letters[j]);
          finalArr.push(letters[j]);
        }
      }
    }
    // console.log(letters);
  }
  let unique = finalArr.filter((v, i, a) => a.indexOf(v) === i);
  console.log(unique);

  let sum = 0;
  for (let i = 0; i < unique.length; i++) {
    sum += letterLookup[unique[i]];
  }
  console.log(sum);
}

// calc2();

let sum = 0;

for (let i = 0; i < arr.length; i += 3) {
  let item = arr[i]
    .split("")
    .filter(
      (letter) => arr[i + 1].includes(letter) && arr[i + 2].includes(letter)
    );

  sum += letterLookup[item[0]];
}

console.log(sum);
