const QUESTIONS=[
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.1",
    "q": "Which filesystem is the standard modern Windows filesystem listed in the objectives?",
    "opts": [
      "NTFS",
      "ext4",
      "APFS",
      "XFS"
    ],
    "ans": [
      0
    ],
    "why": "NTFS is a Windows filesystem. ext4 and XFS are common Linux filesystems; APFS is Apple's filesystem.",
    "tip": "NTFS → Windows; APFS → Apple; ext4/XFS → Linux.",
    "optionWhy": [
      "Correct. Windows filesystem. NTFS is a Windows filesystem. ext4 and XFS are common Linux filesystems; APFS is Apple's filesystem.",
      "Incorrect. ext4 is Linux filesystem; it does not answer this question. The correct answer is NTFS.",
      "Incorrect. APFS is Apple filesystem; it does not answer this question. The correct answer is NTFS.",
      "Incorrect. XFS is Linux filesystem; it does not answer this question. The correct answer is NTFS."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.2",
    "q": "A technician wants to replace the existing OS and start fresh. Which installation type is BEST?",
    "opts": [
      "Clean install",
      "In-place upgrade",
      "Feature update",
      "Driver rollback"
    ],
    "ans": [
      0
    ],
    "why": "A clean install starts with a fresh OS installation rather than preserving the existing installation.",
    "tip": "Clean = fresh start.",
    "optionWhy": [
      "Correct. Fresh installation of an operating system. A clean install starts with a fresh OS installation rather than preserving the existing installation.",
      "Incorrect. In-place upgrade is OS upgrade that preserves existing applications and files; it does not answer this question. The correct answer is Clean install.",
      "Incorrect. Feature update is update that adds or changes OS features; it does not answer this question. The correct answer is Clean install.",
      "Incorrect. Driver rollback is restores an earlier device driver version; it does not answer this question. The correct answer is Clean install."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.3",
    "q": "Which Windows edition feature can encrypt an entire system drive?",
    "opts": [
      "BitLocker",
      "Spotlight",
      "FileVault",
      "Time Machine"
    ],
    "ans": [
      0
    ],
    "why": "BitLocker is the Windows drive-encryption feature listed in the objectives. FileVault is associated with macOS.",
    "tip": "BitLocker = Windows drive encryption.",
    "optionWhy": [
      "Correct. Windows full-drive encryption feature. BitLocker is the Windows drive-encryption feature listed in the objectives. FileVault is associated with macOS.",
      "Incorrect. Spotlight is macOS search feature; it does not answer this question. The correct answer is BitLocker.",
      "Incorrect. FileVault is macOS disk encryption; it does not answer this question. The correct answer is BitLocker.",
      "Incorrect. Time Machine is macOS backup tool; it does not answer this question. The correct answer is BitLocker."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.4",
    "q": "Which Windows tool should you use to review application and system event logs?",
    "opts": [
      "Event Viewer",
      "Disk Cleanup",
      "Registry Editor",
      "File Explorer"
    ],
    "ans": [
      0
    ],
    "why": "Event Viewer (eventvwr.msc) is used to inspect Windows event logs.",
    "tip": "Event Viewer = Windows logs.",
    "optionWhy": [
      "Correct. Windows event log viewer. Event Viewer (eventvwr.msc) is used to inspect Windows event logs.",
      "Incorrect. Disk Cleanup is tool that removes unnecessary files; it does not answer this question. The correct answer is Event Viewer.",
      "Incorrect. Registry Editor is tool that edits Windows registry settings; it does not answer this question. The correct answer is Event Viewer.",
      "Incorrect. File Explorer is tool for browsing files and folders; it does not answer this question. The correct answer is Event Viewer."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.4",
    "q": "Which Windows tool is used to manage disks, partitions, and volumes?",
    "opts": [
      "Disk Management",
      "Task Scheduler",
      "Certificate Manager",
      "Performance Monitor"
    ],
    "ans": [
      0
    ],
    "why": "Disk Management (diskmgmt.msc) manages storage disks and volumes.",
    "tip": "diskmgmt.msc = Disk Management.",
    "optionWhy": [
      "Correct. Windows disk and partition management utility. Disk Management (diskmgmt.msc) manages storage disks and volumes.",
      "Incorrect. Task Scheduler is tool that schedules automated tasks; it does not answer this question. The correct answer is Disk Management.",
      "Incorrect. Certificate Manager is tool for viewing and managing certificates; it does not answer this question. The correct answer is Disk Management.",
      "Incorrect. Performance Monitor is tool for examining performance counters; it does not answer this question. The correct answer is Disk Management."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.5",
    "q": "Which command displays Windows IP configuration information?",
    "opts": [
      "ipconfig",
      "chkdsk",
      "whoami",
      "sfc"
    ],
    "ans": [
      0
    ],
    "why": "ipconfig displays IP configuration. chkdsk checks disks, whoami shows the current identity, and sfc checks protected system files.",
    "tip": "ipconfig = IP configuration.",
    "optionWhy": [
      "Correct. Windows IP configuration command. ipconfig displays IP configuration. chkdsk checks disks, whoami shows the current identity, and sfc checks protected system files.",
      "Incorrect. chkdsk is Windows disk checking utility; it does not answer this question. The correct answer is ipconfig.",
      "Incorrect. whoami is command that shows the current user; it does not answer this question. The correct answer is ipconfig.",
      "Incorrect. sfc is Windows system file integrity checker; it does not answer this question. The correct answer is ipconfig."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.5",
    "q": "Which command checks protected Windows system files and can repair corrupted copies?",
    "opts": [
      "sfc",
      "netstat",
      "format",
      "hostname"
    ],
    "ans": [
      0
    ],
    "why": "System File Checker (sfc) checks protected Windows system files.",
    "tip": "SFC = System File Checker.",
    "optionWhy": [
      "Correct. Windows system file integrity checker. System File Checker (sfc) checks protected Windows system files.",
      "Incorrect. netstat is command that displays network connections and statistics; it does not answer this question. The correct answer is sfc.",
      "Incorrect. format is command that formats a storage volume; it does not answer this question. The correct answer is sfc.",
      "Incorrect. hostname is command that displays or sets the computer name; it does not answer this question. The correct answer is sfc."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.5",
    "q": "Which command is BEST for testing whether another host responds across an IP network?",
    "opts": [
      "ping",
      "dir",
      "rmdir",
      "winver"
    ],
    "ans": [
      0
    ],
    "why": "ping tests IP reachability by sending ICMP echo requests.",
    "tip": "ping = quick reachability test.",
    "optionWhy": [
      "Correct. Command that tests network reachability. ping tests IP reachability by sending ICMP echo requests.",
      "Incorrect. dir does not perform the task described in the question. ping tests IP reachability by sending ICMP echo requests. The correct choice is ping.",
      "Incorrect. rmdir does not perform the task described in the question. ping tests IP reachability by sending ICMP echo requests. The correct choice is ping.",
      "Incorrect. winver does not perform the task described in the question. ping tests IP reachability by sending ICMP echo requests. The correct choice is ping."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.6",
    "q": "Where would you configure what happens when a laptop lid is closed?",
    "opts": [
      "Power Options",
      "Disk Management",
      "Event Viewer",
      "Certificate Manager"
    ],
    "ans": [
      0
    ],
    "why": "The objectives list 'Choose what closing the lid does' under Windows Power Options.",
    "tip": "Laptop lid behavior → Power Options.",
    "optionWhy": [
      "Correct. The objectives list 'Choose what closing the lid does' under Windows Power Options.",
      "Incorrect. Disk Management is Windows disk and partition management utility; it does not answer this question. The correct answer is Power Options.",
      "Incorrect. Event Viewer is Windows event log viewer; it does not answer this question. The correct answer is Power Options.",
      "Incorrect. Certificate Manager is tool for viewing and managing certificates; it does not answer this question. The correct answer is Power Options."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.7",
    "q": "A Windows PC needs a secure connection to the company network from home. Which connection should be established?",
    "opts": [
      "VPN",
      "Workgroup only",
      "Metered connection",
      "Local loopback"
    ],
    "ans": [
      0
    ],
    "why": "A VPN creates a protected connection to a remote network.",
    "tip": "VPN = secure remote network connection.",
    "optionWhy": [
      "Correct. A VPN creates a protected connection to a remote network.",
      "Incorrect. Workgroup only does not perform the task described in the question. A VPN creates a protected connection to a remote network. The correct choice is VPN.",
      "Incorrect. Metered connection does not perform the task described in the question. A VPN creates a protected connection to a remote network. The correct choice is VPN.",
      "Incorrect. Local loopback does not perform the task described in the question. A VPN creates a protected connection to a remote network. The correct choice is VPN."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.8",
    "q": "Which macOS feature is used for backups?",
    "opts": [
      "Time Machine",
      "BitLocker",
      "Task Scheduler",
      "gpedit.msc"
    ],
    "ans": [
      0
    ],
    "why": "Time Machine is the macOS backup feature listed in the objectives.",
    "tip": "Time Machine = macOS backups.",
    "optionWhy": [
      "Correct. MacOS backup tool. Time Machine is the macOS backup feature listed in the objectives.",
      "Incorrect. BitLocker is Windows full-drive encryption feature; it does not answer this question. The correct answer is Time Machine.",
      "Incorrect. Task Scheduler is tool that schedules automated tasks; it does not answer this question. The correct answer is Time Machine.",
      "Incorrect. gpedit.msc does not perform the task described in the question. Time Machine is the macOS backup feature listed in the objectives. The correct choice is Time Machine."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.8",
    "q": "Which macOS feature encrypts a Mac's storage?",
    "opts": [
      "FileVault",
      "BitLocker-To-Go",
      "EFS",
      "UAC"
    ],
    "ans": [
      0
    ],
    "why": "FileVault is Apple's disk-encryption feature.",
    "tip": "FileVault = Mac encryption.",
    "optionWhy": [
      "Correct. MacOS disk encryption. FileVault is Apple's disk-encryption feature.",
      "Incorrect. BitLocker-To-Go does not perform the task described in the question. FileVault is Apple's disk-encryption feature. The correct choice is FileVault.",
      "Incorrect. EFS is Windows Encrypting File System; it does not answer this question. The correct answer is FileVault.",
      "Incorrect. UAC does not perform the task described in the question. FileVault is Apple's disk-encryption feature. The correct choice is FileVault."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.9",
    "q": "Which Linux command lists files and directories?",
    "opts": [
      "ls",
      "pwd",
      "chmod",
      "sudo"
    ],
    "ans": [
      0
    ],
    "why": "ls lists directory contents. pwd prints the working directory, chmod changes permissions, and sudo runs a command with elevated privileges.",
    "tip": "ls = list.",
    "optionWhy": [
      "Correct. Linux command that lists directory contents. ls lists directory contents. pwd prints the working directory, chmod changes permissions, and sudo runs a command with elevated privileges.",
      "Incorrect. pwd is Linux command that prints the current directory; it does not answer this question. The correct answer is ls.",
      "Incorrect. chmod is Linux command that changes file permissions; it does not answer this question. The correct answer is ls.",
      "Incorrect. sudo is Linux command that runs a command with elevated privileges; it does not answer this question. The correct answer is ls."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.9",
    "q": "Which Linux command changes file permissions?",
    "opts": [
      "chmod",
      "grep",
      "cat",
      "df"
    ],
    "ans": [
      0
    ],
    "why": "chmod changes file permissions.",
    "tip": "chmod = change mode/permissions.",
    "optionWhy": [
      "Correct. Linux command that changes file permissions. chmod changes file permissions.",
      "Incorrect. grep is command that searches text for matching patterns; it does not answer this question. The correct answer is chmod.",
      "Incorrect. cat is Linux command that prints or joins file contents; it does not answer this question. The correct answer is chmod.",
      "Incorrect. df does not perform the task described in the question. chmod changes file permissions. The correct choice is chmod."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.9",
    "q": "Which Linux command commonly installs packages on Debian/Ubuntu-based systems?",
    "opts": [
      "apt",
      "dnf",
      "dig",
      "fsck"
    ],
    "ans": [
      0
    ],
    "why": "apt is the package-management command listed alongside dnf in the objectives.",
    "tip": "apt → Debian/Ubuntu-style package management.",
    "optionWhy": [
      "Correct. Debian/Ubuntu package manager used to install and update software. apt is the package-management command listed alongside dnf in the objectives.",
      "Incorrect. dnf is package manager used on Fedora and other RPM-based Linux systems; it does not answer this question. The correct answer is apt.",
      "Incorrect. dig is DNS lookup command, not a package installer; it does not answer this question. The correct answer is apt.",
      "Incorrect. fsck is Linux filesystem consistency checker, not a package installer; it does not answer this question. The correct answer is apt."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.10",
    "q": "Before installing an application, which factor should be verified?",
    "opts": [
      "Application-to-OS compatibility",
      "SSID broadcast state",
      "Printer duplex setting",
      "UPS runtime only"
    ],
    "ans": [
      0
    ],
    "why": "The objectives specifically include application-to-OS compatibility among installation requirements.",
    "tip": "Check requirements before installing.",
    "optionWhy": [
      "Correct. The objectives specifically include application-to-OS compatibility among installation requirements.",
      "Incorrect. SSID broadcast state does not perform the task described in the question. The objectives specifically include application-to-OS compatibility among installation requirements. The correct choice is Application-to-OS compatibility.",
      "Incorrect. Printer duplex setting does not perform the task described in the question. The objectives specifically include application-to-OS compatibility among installation requirements. The correct choice is Application-to-OS compatibility.",
      "Incorrect. UPS runtime only does not perform the task described in the question. The objectives specifically include application-to-OS compatibility among installation requirements. The correct choice is Application-to-OS compatibility."
    ]
  },
  {
    "domain": "1.0 Operating Systems",
    "obj": "1.11",
    "q": "Which cloud productivity feature keeps a user's files synchronized between devices?",
    "opts": [
      "Storage sync/folder settings",
      "BIOS password",
      "Disk defragmentation",
      "Local loopback"
    ],
    "ans": [
      0
    ],
    "why": "Cloud storage sync/folder settings keep cloud files synchronized across configured devices.",
    "tip": "Cloud sync keeps files consistent across devices.",
    "optionWhy": [
      "Correct. Cloud storage sync/folder settings keep cloud files synchronized across configured devices.",
      "Incorrect. BIOS password does not perform the task described in the question. Cloud storage sync/folder settings keep cloud files synchronized across configured devices. The correct choice is Storage sync/folder settings.",
      "Incorrect. Disk defragmentation does not perform the task described in the question. Cloud storage sync/folder settings keep cloud files synchronized across configured devices. The correct choice is Storage sync/folder settings.",
      "Incorrect. Local loopback does not perform the task described in the question. Cloud storage sync/folder settings keep cloud files synchronized across configured devices. The correct choice is Storage sync/folder settings."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.1",
    "q": "Which security principle gives users only the permissions necessary to perform their jobs?",
    "opts": [
      "Principle of least privilege",
      "Open access",
      "Default administrator use",
      "Tailgating"
    ],
    "ans": [
      0
    ],
    "why": "Least privilege limits access to what is necessary.",
    "tip": "Least privilege = only what you need.",
    "optionWhy": [
      "Correct. Least privilege limits access to what is necessary.",
      "Incorrect. Open access does not perform the task described in the question. Least privilege limits access to what is necessary. The correct choice is Principle of least privilege.",
      "Incorrect. Default administrator use does not perform the task described in the question. Least privilege limits access to what is necessary. The correct choice is Principle of least privilege.",
      "Incorrect. Tailgating does not perform the task described in the question. Least privilege limits access to what is necessary. The correct choice is Principle of least privilege."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.1",
    "q": "Which authentication approach requires more than one authentication factor?",
    "opts": [
      "MFA",
      "SSO",
      "ACL",
      "DLP"
    ],
    "ans": [
      0
    ],
    "why": "Multifactor authentication uses more than one authentication factor.",
    "tip": "MFA = multiple factors.",
    "optionWhy": [
      "Correct. Authentication using multiple different factor types. Multifactor authentication uses more than one authentication factor.",
      "Incorrect. SSO is sign-in method that accesses multiple services with one login; it does not answer this question. The correct answer is MFA.",
      "Incorrect. ACL does not perform the task described in the question. Multifactor authentication uses more than one authentication factor. The correct choice is MFA.",
      "Incorrect. DLP does not perform the task described in the question. Multifactor authentication uses more than one authentication factor. The correct choice is MFA."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.2",
    "q": "Which Windows technology encrypts removable drives?",
    "opts": [
      "BitLocker-To-Go",
      "UAC",
      "Windows Hello",
      "gpupdate"
    ],
    "ans": [
      0
    ],
    "why": "BitLocker-To-Go is used for removable-drive encryption.",
    "tip": "BitLocker-To-Go = removable drive encryption.",
    "optionWhy": [
      "Correct. BitLocker-To-Go is used for removable-drive encryption.",
      "Incorrect. UAC does not perform the task described in the question. BitLocker-To-Go is used for removable-drive encryption. The correct choice is BitLocker-To-Go.",
      "Incorrect. Windows Hello does not perform the task described in the question. BitLocker-To-Go is used for removable-drive encryption. The correct choice is BitLocker-To-Go.",
      "Incorrect. gpupdate is Windows command that refreshes Group Policy; it does not answer this question. The correct answer is BitLocker-To-Go."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.2",
    "q": "What is the purpose of User Account Control (UAC)?",
    "opts": [
      "Prompt/control elevation for administrative actions",
      "Encrypt Wi-Fi traffic",
      "Manage Linux packages",
      "Back up macOS"
    ],
    "ans": [
      0
    ],
    "why": "UAC helps control elevation to administrative privileges in Windows.",
    "tip": "UAC = control admin elevation.",
    "optionWhy": [
      "Correct. UAC helps control elevation to administrative privileges in Windows.",
      "Incorrect. Encrypt Wi-Fi traffic does not perform the task described in the question. UAC helps control elevation to administrative privileges in Windows. The correct choice is Prompt/control elevation for administrative actions.",
      "Incorrect. Manage Linux packages does not perform the task described in the question. UAC helps control elevation to administrative privileges in Windows. The correct choice is Prompt/control elevation for administrative actions.",
      "Incorrect. Back up macOS does not perform the task described in the question. UAC helps control elevation to administrative privileges in Windows. The correct choice is Prompt/control elevation for administrative actions."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.3",
    "q": "Which wireless security protocol is newer than WPA2 and listed in the objectives?",
    "opts": [
      "WPA3",
      "WEP",
      "HTTP",
      "TKIP only"
    ],
    "ans": [
      0
    ],
    "why": "WPA3 is the newer Wi-Fi Protected Access protocol listed alongside WPA2.",
    "tip": "WPA3 is newer than WPA2.",
    "optionWhy": [
      "Correct. WPA3 is the newer Wi-Fi Protected Access protocol listed alongside WPA2.",
      "Incorrect. WEP does not perform the task described in the question. WPA3 is the newer Wi-Fi Protected Access protocol listed alongside WPA2. The correct choice is WPA3.",
      "Incorrect. HTTP is web transfer protocol without transport encryption; it does not answer this question. The correct answer is WPA3.",
      "Incorrect. TKIP only does not perform the task described in the question. WPA3 is the newer Wi-Fi Protected Access protocol listed alongside WPA2. The correct choice is WPA3."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.4",
    "q": "Malware encrypts a user's files and demands payment. What type is this?",
    "opts": [
      "Ransomware",
      "Adware",
      "Keylogger",
      "Rootkit"
    ],
    "ans": [
      0
    ],
    "why": "Ransomware commonly encrypts or blocks access to data and demands payment.",
    "tip": "Ransomware = ransom for data/access.",
    "optionWhy": [
      "Correct. Ransomware commonly encrypts or blocks access to data and demands payment.",
      "Incorrect. Adware does not perform the task described in the question. Ransomware commonly encrypts or blocks access to data and demands payment. The correct choice is Ransomware.",
      "Incorrect. Keylogger does not perform the task described in the question. Ransomware commonly encrypts or blocks access to data and demands payment. The correct choice is Ransomware.",
      "Incorrect. Rootkit does not perform the task described in the question. Ransomware commonly encrypts or blocks access to data and demands payment. The correct choice is Ransomware."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.4",
    "q": "Which malware secretly records keystrokes?",
    "opts": [
      "Keylogger",
      "Cryptominer",
      "Boot sector virus",
      "Adware"
    ],
    "ans": [
      0
    ],
    "why": "A keylogger records keyboard input.",
    "tip": "Keylogger = logs keys.",
    "optionWhy": [
      "Correct. A keylogger records keyboard input.",
      "Incorrect. Cryptominer does not perform the task described in the question. A keylogger records keyboard input. The correct choice is Keylogger.",
      "Incorrect. Boot sector virus does not perform the task described in the question. A keylogger records keyboard input. The correct choice is Keylogger.",
      "Incorrect. Adware does not perform the task described in the question. A keylogger records keyboard input. The correct choice is Keylogger."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.5",
    "q": "A fraudulent message targets one specific employee using personalized information. What attack is this?",
    "opts": [
      "Spear phishing",
      "Shoulder surfing",
      "Tailgating",
      "Dumpster diving"
    ],
    "ans": [
      0
    ],
    "why": "Spear phishing is targeted phishing directed at a specific person or group.",
    "tip": "Spear phishing = targeted phishing.",
    "optionWhy": [
      "Correct. Spear phishing is targeted phishing directed at a specific person or group.",
      "Incorrect. Shoulder surfing does not perform the task described in the question. Spear phishing is targeted phishing directed at a specific person or group. The correct choice is Spear phishing.",
      "Incorrect. Tailgating does not perform the task described in the question. Spear phishing is targeted phishing directed at a specific person or group. The correct choice is Spear phishing.",
      "Incorrect. Dumpster diving does not perform the task described in the question. Spear phishing is targeted phishing directed at a specific person or group. The correct choice is Spear phishing."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.5",
    "q": "A malicious actor follows an authorized employee through a secured door without authenticating. What is this?",
    "opts": [
      "Tailgating",
      "Whaling",
      "Smishing",
      "SQL injection"
    ],
    "ans": [
      0
    ],
    "why": "Tailgating is entering a restricted area by following an authorized person.",
    "tip": "Tailgating = follow someone through access control.",
    "optionWhy": [
      "Correct. Tailgating is entering a restricted area by following an authorized person.",
      "Incorrect. Whaling does not perform the task described in the question. Tailgating is entering a restricted area by following an authorized person. The correct choice is Tailgating.",
      "Incorrect. Smishing does not perform the task described in the question. Tailgating is entering a restricted area by following an authorized person. The correct choice is Tailgating.",
      "Incorrect. SQL injection does not perform the task described in the question. Tailgating is entering a restricted area by following an authorized person. The correct choice is Tailgating."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.5",
    "q": "Phishing performed through SMS text messages is called what?",
    "opts": [
      "Smishing",
      "Vishing",
      "Whaling",
      "Spoofing"
    ],
    "ans": [
      0
    ],
    "why": "Smishing is SMS-based phishing.",
    "tip": "SMS + phishing = smishing.",
    "optionWhy": [
      "Correct. Smishing is SMS-based phishing.",
      "Incorrect. Vishing does not perform the task described in the question. Smishing is SMS-based phishing. The correct choice is Smishing.",
      "Incorrect. Whaling does not perform the task described in the question. Smishing is SMS-based phishing. The correct choice is Smishing.",
      "Incorrect. Spoofing does not perform the task described in the question. Smishing is SMS-based phishing. The correct choice is Smishing."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.6",
    "q": "After verifying malware symptoms, what is the next listed SOHO malware-removal step?",
    "opts": [
      "Quarantine the infected system",
      "Immediately reconnect it to the LAN",
      "Enable every startup item",
      "Delete all backups"
    ],
    "ans": [
      0
    ],
    "why": "The objective sequence lists quarantining the infected system after investigating and verifying symptoms.",
    "tip": "Verify → quarantine.",
    "optionWhy": [
      "Correct. The objective sequence lists quarantining the infected system after investigating and verifying symptoms.",
      "Incorrect. Immediately reconnect it to the LAN does not perform the task described in the question. The objective sequence lists quarantining the infected system after investigating and verifying symptoms. The correct choice is Quarantine the infected system.",
      "Incorrect. Enable every startup item does not perform the task described in the question. The objective sequence lists quarantining the infected system after investigating and verifying symptoms. The correct choice is Quarantine the infected system.",
      "Incorrect. Delete all backups does not perform the task described in the question. The objective sequence lists quarantining the infected system after investigating and verifying symptoms. The correct choice is Quarantine the infected system."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.7",
    "q": "Which hardening action reduces risk from unused software components?",
    "opts": [
      "Disable unused services",
      "Enable every service",
      "Share administrator credentials",
      "Disable screen locks"
    ],
    "ans": [
      0
    ],
    "why": "The objectives explicitly list disabling unused services as a workstation-hardening technique.",
    "tip": "If you don't need the service, disable it.",
    "optionWhy": [
      "Correct. The objectives explicitly list disabling unused services as a workstation-hardening technique.",
      "Incorrect. Enable every service does not perform the task described in the question. The objectives explicitly list disabling unused services as a workstation-hardening technique. The correct choice is Disable unused services.",
      "Incorrect. Share administrator credentials does not perform the task described in the question. The objectives explicitly list disabling unused services as a workstation-hardening technique. The correct choice is Disable unused services.",
      "Incorrect. Disable screen locks does not perform the task described in the question. The objectives explicitly list disabling unused services as a workstation-hardening technique. The correct choice is Disable unused services."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.8",
    "q": "A company phone is lost. Which capability can erase its data from a distance?",
    "opts": [
      "Remote wipe",
      "SSID broadcast",
      "Disk defrag",
      "Port forwarding"
    ],
    "ans": [
      0
    ],
    "why": "Remote wipe is listed as a mobile-device security method.",
    "tip": "Lost device → remote wipe.",
    "optionWhy": [
      "Correct. Remote wipe is listed as a mobile-device security method.",
      "Incorrect. SSID broadcast does not perform the task described in the question. Remote wipe is listed as a mobile-device security method. The correct choice is Remote wipe.",
      "Incorrect. Disk defrag does not perform the task described in the question. Remote wipe is listed as a mobile-device security method. The correct choice is Remote wipe.",
      "Incorrect. Port forwarding does not perform the task described in the question. Remote wipe is listed as a mobile-device security method. The correct choice is Remote wipe."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.9",
    "q": "Which method physically destroys a hard drive by reducing it to pieces?",
    "opts": [
      "Shredding",
      "Standard formatting",
      "Deleting files",
      "Emptying recycle bin"
    ],
    "ans": [
      0
    ],
    "why": "Shredding is one of the physical destruction methods listed for hard drives.",
    "tip": "Physical destruction is stronger than logical deletion.",
    "optionWhy": [
      "Correct. Shredding is one of the physical destruction methods listed for hard drives.",
      "Incorrect. Standard formatting does not perform the task described in the question. Shredding is one of the physical destruction methods listed for hard drives. The correct choice is Shredding.",
      "Incorrect. Deleting files does not perform the task described in the question. Shredding is one of the physical destruction methods listed for hard drives. The correct choice is Shredding.",
      "Incorrect. Emptying recycle bin does not perform the task described in the question. Shredding is one of the physical destruction methods listed for hard drives. The correct choice is Shredding."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.10",
    "q": "What should be changed first on a newly installed SOHO router to improve security?",
    "opts": [
      "Default administrator password",
      "Monitor resolution",
      "Printer orientation",
      "Windows wallpaper"
    ],
    "ans": [
      0
    ],
    "why": "Changing default passwords is a listed router-security setting and removes known/default credentials.",
    "tip": "New router → change default credentials.",
    "optionWhy": [
      "Correct. Changing default passwords is a listed router-security setting and removes known/default credentials.",
      "Incorrect. Monitor resolution does not perform the task described in the question. Changing default passwords is a listed router-security setting and removes known/default credentials. The correct choice is Default administrator password.",
      "Incorrect. Printer orientation does not perform the task described in the question. Changing default passwords is a listed router-security setting and removes known/default credentials. The correct choice is Default administrator password.",
      "Incorrect. Windows wallpaper does not perform the task described in the question. Changing default passwords is a listed router-security setting and removes known/default credentials. The correct choice is Default administrator password."
    ]
  },
  {
    "domain": "2.0 Security",
    "obj": "2.11",
    "q": "Which browser indicator should be checked when determining whether a secure site has a valid identity?",
    "opts": [
      "Valid certificate",
      "Desktop wallpaper",
      "CPU clock speed",
      "Printer queue"
    ],
    "ans": [
      0
    ],
    "why": "The browser-security objective specifically includes secure sites and valid certificates.",
    "tip": "Secure site → check certificate validity.",
    "optionWhy": [
      "Correct. The browser-security objective specifically includes secure sites and valid certificates.",
      "Incorrect. Desktop wallpaper does not perform the task described in the question. The browser-security objective specifically includes secure sites and valid certificates. The correct choice is Valid certificate.",
      "Incorrect. CPU clock speed does not perform the task described in the question. The browser-security objective specifically includes secure sites and valid certificates. The correct choice is Valid certificate.",
      "Incorrect. Printer queue does not perform the task described in the question. The browser-security objective specifically includes secure sites and valid certificates. The correct choice is Valid certificate."
    ]
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "obj": "3.1",
    "q": "A Windows computer displays a BSOD. Which Core 2 category does this symptom belong to?",
    "opts": [
      "Common Windows OS issue",
      "SOHO router hardening",
      "Backup rotation",
      "macOS productivity"
    ],
    "ans": [
      0
    ],
    "why": "BSOD is explicitly listed under common Windows OS troubleshooting issues.",
    "tip": "BSOD = Windows troubleshooting.",
    "optionWhy": [
      "Correct. BSOD is explicitly listed under common Windows OS troubleshooting issues.",
      "Incorrect. SOHO router hardening does not perform the task described in the question. BSOD is explicitly listed under common Windows OS troubleshooting issues. The correct choice is Common Windows OS issue.",
      "Incorrect. Backup rotation does not perform the task described in the question. BSOD is explicitly listed under common Windows OS troubleshooting issues. The correct choice is Common Windows OS issue.",
      "Incorrect. macOS productivity does not perform the task described in the question. BSOD is explicitly listed under common Windows OS troubleshooting issues. The correct choice is Common Windows OS issue."
    ]
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "obj": "3.1",
    "q": "The PC starts but reports 'No OS found.' What type of issue should you troubleshoot?",
    "opts": [
      "Boot/OS issue",
      "Browser certificate only",
      "Mobile autorotation",
      "Printer toner"
    ],
    "ans": [
      0
    ],
    "why": "'No OS found' is a listed Windows troubleshooting symptom.",
    "tip": "No OS found = boot/storage/OS troubleshooting path.",
    "optionWhy": [
      "Correct. 'No OS found' is a listed Windows troubleshooting symptom.",
      "Incorrect. Browser certificate only does not perform the task described in the question. 'No OS found' is a listed Windows troubleshooting symptom. The correct choice is Boot/OS issue.",
      "Incorrect. Mobile autorotation does not perform the task described in the question. 'No OS found' is a listed Windows troubleshooting symptom. The correct choice is Boot/OS issue.",
      "Incorrect. Printer toner does not perform the task described in the question. 'No OS found' is a listed Windows troubleshooting symptom. The correct choice is Boot/OS issue."
    ]
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "obj": "3.1",
    "q": "A Windows machine's clock gradually becomes incorrect. Which listed symptom is this?",
    "opts": [
      "Time drift",
      "Low memory",
      "BSOD",
      "USB resource warning"
    ],
    "ans": [
      0
    ],
    "why": "Time drift is explicitly listed as a common Windows OS issue.",
    "tip": "Clock slowly wrong = time drift.",
    "optionWhy": [
      "Correct. Time drift is explicitly listed as a common Windows OS issue.",
      "Incorrect. Low memory does not perform the task described in the question. Time drift is explicitly listed as a common Windows OS issue. The correct choice is Time drift.",
      "Incorrect. BSOD does not perform the task described in the question. Time drift is explicitly listed as a common Windows OS issue. The correct choice is Time drift.",
      "Incorrect. USB resource warning does not perform the task described in the question. Time drift is explicitly listed as a common Windows OS issue. The correct choice is Time drift."
    ]
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "obj": "3.2",
    "q": "A phone repeatedly restarts without the user requesting it. Which listed mobile symptom is this?",
    "opts": [
      "Random reboots",
      "Screen autorotation",
      "Application update",
      "NFC pairing"
    ],
    "ans": [
      0
    ],
    "why": "Random reboots are listed among mobile OS/application troubleshooting symptoms.",
    "tip": "Unexpected restarts = random reboots.",
    "optionWhy": [
      "Correct. Random reboots are listed among mobile OS/application troubleshooting symptoms.",
      "Incorrect. Screen autorotation does not perform the task described in the question. Random reboots are listed among mobile OS/application troubleshooting symptoms. The correct choice is Random reboots.",
      "Incorrect. Application update does not perform the task described in the question. Random reboots are listed among mobile OS/application troubleshooting symptoms. The correct choice is Random reboots.",
      "Incorrect. NFC pairing does not perform the task described in the question. Random reboots are listed among mobile OS/application troubleshooting symptoms. The correct choice is Random reboots."
    ]
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "obj": "3.2",
    "q": "A phone stays in portrait mode when rotated. Which issue matches the objectives?",
    "opts": [
      "Screen does not autorotate",
      "Ransomware",
      "Certificate warning",
      "Slow profile load"
    ],
    "ans": [
      0
    ],
    "why": "The objective explicitly lists a screen that does not autorotate.",
    "tip": "Rotation problem → autorotate troubleshooting.",
    "optionWhy": [
      "Correct. The objective explicitly lists a screen that does not autorotate.",
      "Incorrect. Ransomware does not perform the task described in the question. The objective explicitly lists a screen that does not autorotate. The correct choice is Screen does not autorotate.",
      "Incorrect. Certificate warning does not perform the task described in the question. The objective explicitly lists a screen that does not autorotate. The correct choice is Screen does not autorotate.",
      "Incorrect. Slow profile load does not perform the task described in the question. The objective explicitly lists a screen that does not autorotate. The correct choice is Screen does not autorotate."
    ]
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "obj": "3.3",
    "q": "A mobile device suddenly shows many ads and fake security warnings. What should you suspect?",
    "opts": [
      "A security/malicious application issue",
      "Normal battery calibration",
      "A printer driver issue",
      "A healthy OS update"
    ],
    "ans": [
      0
    ],
    "why": "High numbers of ads and fake security warnings are listed mobile security symptoms.",
    "tip": "Ads + fake warnings = suspect malicious/unwanted software.",
    "optionWhy": [
      "Correct. High numbers of ads and fake security warnings are listed mobile security symptoms.",
      "Incorrect. Normal battery calibration does not perform the task described in the question. High numbers of ads and fake security warnings are listed mobile security symptoms. The correct choice is A security/malicious application issue.",
      "Incorrect. A printer driver issue does not perform the task described in the question. High numbers of ads and fake security warnings are listed mobile security symptoms. The correct choice is A security/malicious application issue.",
      "Incorrect. A healthy OS update does not perform the task described in the question. High numbers of ads and fake security warnings are listed mobile security symptoms. The correct choice is A security/malicious application issue."
    ]
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "obj": "3.3",
    "q": "Installing apps from unofficial application stores creates what concern?",
    "opts": [
      "Application source/security risk",
      "Guaranteed encryption",
      "Automatic backup",
      "Improved patching"
    ],
    "ans": [
      0
    ],
    "why": "Unofficial application sources are explicitly listed as a mobile security concern.",
    "tip": "Use trusted app sources.",
    "optionWhy": [
      "Correct. Unofficial application sources are explicitly listed as a mobile security concern.",
      "Incorrect. Guaranteed encryption does not perform the task described in the question. Unofficial application sources are explicitly listed as a mobile security concern. The correct choice is Application source/security risk.",
      "Incorrect. Automatic backup does not perform the task described in the question. Unofficial application sources are explicitly listed as a mobile security concern. The correct choice is Application source/security risk.",
      "Incorrect. Improved patching does not perform the task described in the question. Unofficial application sources are explicitly listed as a mobile security concern. The correct choice is Application source/security risk."
    ]
  },
  {
    "domain": "3.0 Software Troubleshooting",
    "obj": "3.4",
    "q": "A browser constantly redirects to unexpected websites. Which symptom category is this?",
    "opts": [
      "Browser-related security symptom",
      "Backup failure only",
      "Normal DNS caching",
      "Power-management feature"
    ],
    "ans": [
      0
    ],
    "why": "Redirection is listed among browser-related PC security symptoms.",
    "tip": "Unexpected redirects = investigate browser/security.",
    "optionWhy": [
      "Correct. Redirection is listed among browser-related PC security symptoms.",
      "Incorrect. Backup failure only does not perform the task described in the question. Redirection is listed among browser-related PC security symptoms. The correct choice is Browser-related security symptom.",
      "Incorrect. Normal DNS caching does not perform the task described in the question. Redirection is listed among browser-related PC security symptoms. The correct choice is Browser-related security symptom.",
      "Incorrect. Power-management feature does not perform the task described in the question. Redirection is listed among browser-related PC security symptoms. The correct choice is Browser-related security symptom."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.1",
    "q": "What should a support ticket contain to make later troubleshooting clear?",
    "opts": [
      "Clear issue description and progress notes",
      "Only the user's first name",
      "No resolution details",
      "Unrelated personal notes"
    ],
    "ans": [
      0
    ],
    "why": "The objectives emphasize clear, concise issue descriptions, progress notes, and resolution documentation.",
    "tip": "Good tickets tell the story: issue → progress → resolution.",
    "optionWhy": [
      "Correct. The objectives emphasize clear, concise issue descriptions, progress notes, and resolution documentation.",
      "Incorrect. Only the user's first name does not perform the task described in the question. The objectives emphasize clear, concise issue descriptions, progress notes, and resolution documentation. The correct choice is Clear issue description and progress notes.",
      "Incorrect. No resolution details does not perform the task described in the question. The objectives emphasize clear, concise issue descriptions, progress notes, and resolution documentation. The correct choice is Clear issue description and progress notes.",
      "Incorrect. Unrelated personal notes does not perform the task described in the question. The objectives emphasize clear, concise issue descriptions, progress notes, and resolution documentation. The correct choice is Clear issue description and progress notes."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.2",
    "q": "What plan allows a failed change to be reversed?",
    "opts": [
      "Rollback plan",
      "Password policy",
      "AUP",
      "Asset tag"
    ],
    "ans": [
      0
    ],
    "why": "A rollback plan is part of documented change-management processes.",
    "tip": "Before changing, know how to undo it.",
    "optionWhy": [
      "Correct. A rollback plan is part of documented change-management processes.",
      "Incorrect. Password policy does not perform the task described in the question. A rollback plan is part of documented change-management processes. The correct choice is Rollback plan.",
      "Incorrect. AUP is acceptable use policy; it does not answer this question. The correct answer is Rollback plan.",
      "Incorrect. Asset tag does not perform the task described in the question. A rollback plan is part of documented change-management processes. The correct choice is Rollback plan."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.2",
    "q": "When should a risky planned change ideally be tested before production?",
    "opts": [
      "In a sandbox/testing environment",
      "Only after users complain",
      "Without a backup",
      "During an unapproved outage"
    ],
    "ans": [
      0
    ],
    "why": "Sandbox testing is listed as part of documented change-management processes.",
    "tip": "Test changes away from production first.",
    "optionWhy": [
      "Correct. Sandbox testing is listed as part of documented change-management processes.",
      "Incorrect. Only after users complain does not perform the task described in the question. Sandbox testing is listed as part of documented change-management processes. The correct choice is In a sandbox/testing environment.",
      "Incorrect. Without a backup does not perform the task described in the question. Sandbox testing is listed as part of documented change-management processes. The correct choice is In a sandbox/testing environment.",
      "Incorrect. During an unapproved outage does not perform the task described in the question. Sandbox testing is listed as part of documented change-management processes. The correct choice is In a sandbox/testing environment."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.3",
    "q": "Which backup contains all selected data each time it runs?",
    "opts": [
      "Full",
      "Incremental",
      "Differential",
      "Synthetic full only"
    ],
    "ans": [
      0
    ],
    "why": "A full backup copies all selected data.",
    "tip": "Full = everything selected.",
    "optionWhy": [
      "Correct. A full backup copies all selected data.",
      "Incorrect. Incremental does not perform the task described in the question. A full backup copies all selected data. The correct choice is Full.",
      "Incorrect. Differential does not perform the task described in the question. A full backup copies all selected data. The correct choice is Full.",
      "Incorrect. Synthetic full only does not perform the task described in the question. A full backup copies all selected data. The correct choice is Full."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.3",
    "q": "What does the 3-2-1 backup rule emphasize?",
    "opts": [
      "Multiple copies, different media, and an offsite copy",
      "One copy on one disk",
      "Only cloud storage",
      "Only daily incremental backups"
    ],
    "ans": [
      0
    ],
    "why": "The objectives include the 3-2-1 backup rule as a backup rotation concept.",
    "tip": "3-2-1: 3 copies, 2 media types, 1 offsite.",
    "optionWhy": [
      "Correct. The objectives include the 3-2-1 backup rule as a backup rotation concept.",
      "Incorrect. One copy on one disk does not perform the task described in the question. The objectives include the 3-2-1 backup rule as a backup rotation concept. The correct choice is Multiple copies, different media, and an offsite copy.",
      "Incorrect. Only cloud storage does not perform the task described in the question. The objectives include the 3-2-1 backup rule as a backup rotation concept. The correct choice is Multiple copies, different media, and an offsite copy.",
      "Incorrect. Only daily incremental backups does not perform the task described in the question. The objectives include the 3-2-1 backup rule as a backup rotation concept. The correct choice is Multiple copies, different media, and an offsite copy."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.4",
    "q": "Before repairing the inside of a PC, what personal-safety step is listed?",
    "opts": [
      "Disconnect power",
      "Enable AutoRun",
      "Disable UAC",
      "Start a video call"
    ],
    "ans": [
      0
    ],
    "why": "The objectives explicitly say to disconnect power before repairing a PC.",
    "tip": "Inside the PC → power off/disconnect first.",
    "optionWhy": [
      "Correct. The objectives explicitly say to disconnect power before repairing a PC.",
      "Incorrect. Enable AutoRun does not perform the task described in the question. The objectives explicitly say to disconnect power before repairing a PC. The correct choice is Disconnect power.",
      "Incorrect. Disable UAC does not perform the task described in the question. The objectives explicitly say to disconnect power before repairing a PC. The correct choice is Disconnect power.",
      "Incorrect. Start a video call does not perform the task described in the question. The objectives explicitly say to disconnect power before repairing a PC. The correct choice is Disconnect power."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.4",
    "q": "Which item helps protect components from electrostatic discharge while a technician works?",
    "opts": [
      "ESD strap",
      "HDMI cable",
      "Surge suppressor only",
      "Printer ribbon"
    ],
    "ans": [
      0
    ],
    "why": "ESD straps and mats are listed safety tools for electrostatic discharge.",
    "tip": "ESD strap protects sensitive electronics from static.",
    "optionWhy": [
      "Correct. ESD straps and mats are listed safety tools for electrostatic discharge.",
      "Incorrect. HDMI cable does not perform the task described in the question. ESD straps and mats are listed safety tools for electrostatic discharge. The correct choice is ESD strap.",
      "Incorrect. Surge suppressor only does not perform the task described in the question. ESD straps and mats are listed safety tools for electrostatic discharge. The correct choice is ESD strap.",
      "Incorrect. Printer ribbon does not perform the task described in the question. ESD straps and mats are listed safety tools for electrostatic discharge. The correct choice is ESD strap."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.5",
    "q": "Which device can provide temporary battery power during a blackout?",
    "opts": [
      "UPS",
      "Surge suppressor only",
      "KVM",
      "Patch panel"
    ],
    "ans": [
      0
    ],
    "why": "An uninterruptible power supply can provide temporary battery power during an outage.",
    "tip": "UPS = backup power; surge suppressor = surge protection.",
    "optionWhy": [
      "Correct. An uninterruptible power supply can provide temporary battery power during an outage.",
      "Incorrect. Surge suppressor only does not perform the task described in the question. An uninterruptible power supply can provide temporary battery power during an outage. The correct choice is UPS.",
      "Incorrect. KVM does not perform the task described in the question. An uninterruptible power supply can provide temporary battery power during an outage. The correct choice is UPS.",
      "Incorrect. Patch panel does not perform the task described in the question. An uninterruptible power supply can provide temporary battery power during an outage. The correct choice is UPS."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.6",
    "q": "Why is chain of custody important during incident response?",
    "opts": [
      "It documents control and handling of evidence",
      "It speeds up Wi-Fi",
      "It installs applications",
      "It changes file permissions"
    ],
    "ans": [
      0
    ],
    "why": "Chain of custody documents who handled evidence and helps preserve its integrity.",
    "tip": "Evidence needs a documented custody trail.",
    "optionWhy": [
      "Correct. Chain of custody documents who handled evidence and helps preserve its integrity.",
      "Incorrect. It speeds up Wi-Fi does not perform the task described in the question. Chain of custody documents who handled evidence and helps preserve its integrity. The correct choice is It documents control and handling of evidence.",
      "Incorrect. It installs applications does not perform the task described in the question. Chain of custody documents who handled evidence and helps preserve its integrity. The correct choice is It documents control and handling of evidence.",
      "Incorrect. It changes file permissions does not perform the task described in the question. Chain of custody documents who handled evidence and helps preserve its integrity. The correct choice is It documents control and handling of evidence."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.7",
    "q": "A customer is upset and explains a recurring issue. What should the technician do?",
    "opts": [
      "Actively listen and avoid interrupting",
      "Argue about the cause",
      "Dismiss the issue",
      "Use as much jargon as possible"
    ],
    "ans": [
      0
    ],
    "why": "The objectives emphasize active listening, avoiding interruptions, and professional communication.",
    "tip": "Listen first; clarify professionally.",
    "optionWhy": [
      "Correct. The objectives emphasize active listening, avoiding interruptions, and professional communication.",
      "Incorrect. Argue about the cause does not perform the task described in the question. The objectives emphasize active listening, avoiding interruptions, and professional communication. The correct choice is Actively listen and avoid interrupting.",
      "Incorrect. Dismiss the issue does not perform the task described in the question. The objectives emphasize active listening, avoiding interruptions, and professional communication. The correct choice is Actively listen and avoid interrupting.",
      "Incorrect. Use as much jargon as possible does not perform the task described in the question. The objectives emphasize active listening, avoiding interruptions, and professional communication. The correct choice is Actively listen and avoid interrupting."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.8",
    "q": "Which file extension is associated with a PowerShell script?",
    "opts": [
      ".ps1",
      ".bat only",
      ".dmg",
      ".pkg"
    ],
    "ans": [
      0
    ],
    "why": "The scripting objective lists .ps1 as a script file type.",
    "tip": "PowerShell → .ps1.",
    "optionWhy": [
      "Correct. The scripting objective lists .ps1 as a script file type.",
      "Incorrect. .bat only does not perform the task described in the question. The scripting objective lists .ps1 as a script file type. The correct choice is .ps1.",
      "Incorrect. .dmg does not perform the task described in the question. The scripting objective lists .ps1 as a script file type. The correct choice is .ps1.",
      "Incorrect. .pkg does not perform the task described in the question. The scripting objective lists .ps1 as a script file type. The correct choice is .ps1."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.8",
    "q": "Which is a valid scripting use case listed in the objectives?",
    "opts": [
      "Automated backups",
      "Physically replacing RAM",
      "Cleaning toner from a printer",
      "Installing a heat sink"
    ],
    "ans": [
      0
    ],
    "why": "Automated backups are explicitly listed as a scripting use case.",
    "tip": "Scripts automate repeatable software tasks.",
    "optionWhy": [
      "Correct. Automated backups are explicitly listed as a scripting use case.",
      "Incorrect. Physically replacing RAM does not perform the task described in the question. Automated backups are explicitly listed as a scripting use case. The correct choice is Automated backups.",
      "Incorrect. Cleaning toner from a printer does not perform the task described in the question. Automated backups are explicitly listed as a scripting use case. The correct choice is Automated backups.",
      "Incorrect. Installing a heat sink does not perform the task described in the question. Automated backups are explicitly listed as a scripting use case. The correct choice is Automated backups."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.9",
    "q": "Which remote-access technology provides a Windows graphical remote desktop session?",
    "opts": [
      "RDP",
      "SSH only",
      "SDS",
      "EFS"
    ],
    "ans": [
      0
    ],
    "why": "Remote Desktop Protocol (RDP) is one of the listed remote access technologies.",
    "tip": "RDP = graphical Windows remote desktop.",
    "optionWhy": [
      "Correct. Remote Desktop Protocol for remote graphical access. Remote Desktop Protocol (RDP) is one of the listed remote access technologies.",
      "Incorrect. SSH only does not perform the task described in the question. Remote Desktop Protocol (RDP) is one of the listed remote access technologies. The correct choice is RDP.",
      "Incorrect. SDS does not perform the task described in the question. Remote Desktop Protocol (RDP) is one of the listed remote access technologies. The correct choice is RDP.",
      "Incorrect. EFS is Windows Encrypting File System; it does not answer this question. The correct answer is RDP."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.10",
    "q": "An AI tool confidently gives a false answer. Which AI limitation does this demonstrate?",
    "opts": [
      "Hallucination",
      "ESD",
      "Rollback",
      "Encryption"
    ],
    "ans": [
      0
    ],
    "why": "The AI objective explicitly lists hallucinations as a limitation.",
    "tip": "AI can sound confident and still be wrong—verify outputs.",
    "optionWhy": [
      "Correct. The AI objective explicitly lists hallucinations as a limitation.",
      "Incorrect. ESD does not perform the task described in the question. The AI objective explicitly lists hallucinations as a limitation. The correct choice is Hallucination.",
      "Incorrect. Rollback does not perform the task described in the question. The AI objective explicitly lists hallucinations as a limitation. The correct choice is Hallucination.",
      "Incorrect. Encryption does not perform the task described in the question. The AI objective explicitly lists hallucinations as a limitation. The correct choice is Hallucination."
    ]
  },
  {
    "domain": "4.0 Operational Procedures",
    "obj": "4.10",
    "q": "Before entering company information into a public AI service, which concern is MOST relevant?",
    "opts": [
      "Data privacy/security",
      "Printer duplex",
      "Disk fragmentation",
      "Screen autorotation"
    ],
    "ans": [
      0
    ],
    "why": "The objectives list private vs. public AI considerations including data security, source, and privacy.",
    "tip": "Public AI + company data → think privacy and policy first.",
    "optionWhy": [
      "Correct. The objectives list private vs. public AI considerations including data security, source, and privacy.",
      "Incorrect. Printer duplex does not perform the task described in the question. The objectives list private vs. public AI considerations including data security, source, and privacy. The correct choice is Data privacy/security.",
      "Incorrect. Disk fragmentation does not perform the task described in the question. The objectives list private vs. public AI considerations including data security, source, and privacy. The correct choice is Data privacy/security.",
      "Incorrect. Screen autorotation does not perform the task described in the question. The objectives list private vs. public AI considerations including data security, source, and privacy. The correct choice is Data privacy/security."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does UAC stand for?",
    "opts": [
      "Remote Monitoring and Management",
      "User Account Control",
      "Configuration Management Database",
      "Service-level Agreement"
    ],
    "ans": [
      1
    ],
    "why": "UAC stands for User Account Control.",
    "tip": "UAC = User Account Control.",
    "optionWhy": [
      "Incorrect. Remote Monitoring and Management is a different term, not the expansion asked for. The correct expansion is User Account Control.",
      "Correct. UAC stands for User Account Control.",
      "Incorrect. Configuration Management Database is a different term, not the expansion asked for. The correct expansion is User Account Control.",
      "Incorrect. Service-level Agreement is a different term, not the expansion asked for. The correct expansion is User Account Control."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does MFA stand for?",
    "opts": [
      "Extended Detection and Response",
      "Multifactor Authentication",
      "Mobile Device Management",
      "Configuration Management Database"
    ],
    "ans": [
      1
    ],
    "why": "MFA stands for Multifactor Authentication.",
    "tip": "MFA = Multifactor Authentication.",
    "optionWhy": [
      "Incorrect. Extended Detection and Response is a different term, not the expansion asked for. The correct expansion is Multifactor Authentication.",
      "Correct. MFA stands for Multifactor Authentication.",
      "Incorrect. Mobile Device Management is a different term, not the expansion asked for. The correct expansion is Multifactor Authentication.",
      "Incorrect. Configuration Management Database is a different term, not the expansion asked for. The correct expansion is Multifactor Authentication."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does DLP stand for?",
    "opts": [
      "Security Assertions Markup Language",
      "Data Loss Prevention",
      "Service-level Agreement",
      "Extended Detection and Response"
    ],
    "ans": [
      1
    ],
    "why": "DLP stands for Data Loss Prevention.",
    "tip": "DLP = Data Loss Prevention.",
    "optionWhy": [
      "Incorrect. Security Assertions Markup Language is a different term, not the expansion asked for. The correct expansion is Data Loss Prevention.",
      "Correct. DLP stands for Data Loss Prevention.",
      "Incorrect. Service-level Agreement is a different term, not the expansion asked for. The correct expansion is Data Loss Prevention.",
      "Incorrect. Extended Detection and Response is a different term, not the expansion asked for. The correct expansion is Data Loss Prevention."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does EDR stand for?",
    "opts": [
      "Encrypting File System",
      "Endpoint Detection and Response",
      "End-of-life",
      "Configuration Management Database"
    ],
    "ans": [
      1
    ],
    "why": "EDR stands for Endpoint Detection and Response.",
    "tip": "EDR = Endpoint Detection and Response.",
    "optionWhy": [
      "Incorrect. Encrypting File System is a different term, not the expansion asked for. The correct expansion is Endpoint Detection and Response.",
      "Correct. EDR stands for Endpoint Detection and Response.",
      "Incorrect. End-of-life is a different term, not the expansion asked for. The correct expansion is Endpoint Detection and Response.",
      "Incorrect. Configuration Management Database is a different term, not the expansion asked for. The correct expansion is Endpoint Detection and Response."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does EFS stand for?",
    "opts": [
      "Business Email Compromise",
      "Encrypting File System",
      "Time-based One-time Password",
      "Acceptable Use Policy"
    ],
    "ans": [
      1
    ],
    "why": "EFS stands for Encrypting File System.",
    "tip": "EFS = Encrypting File System.",
    "optionWhy": [
      "Incorrect. Business Email Compromise is a different term, not the expansion asked for. The correct expansion is Encrypting File System.",
      "Correct. EFS stands for Encrypting File System.",
      "Incorrect. Time-based One-time Password is a different term, not the expansion asked for. The correct expansion is Encrypting File System.",
      "Incorrect. Acceptable Use Policy is a different term, not the expansion asked for. The correct expansion is Encrypting File System."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does EOL stand for?",
    "opts": [
      "Encrypting File System",
      "Data Loss Prevention",
      "End-of-life",
      "Remote Monitoring and Management"
    ],
    "ans": [
      2
    ],
    "why": "EOL stands for End-of-life.",
    "tip": "EOL = End-of-life.",
    "optionWhy": [
      "Incorrect. Encrypting File System is a different term, not the expansion asked for. The correct expansion is End-of-life.",
      "Incorrect. Data Loss Prevention is a different term, not the expansion asked for. The correct expansion is End-of-life.",
      "Correct. EOL stands for End-of-life.",
      "Incorrect. Remote Monitoring and Management is a different term, not the expansion asked for. The correct expansion is End-of-life."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does AUP stand for?",
    "opts": [
      "Remote Monitoring and Management",
      "Security Assertions Markup Language",
      "Acceptable Use Policy",
      "Grandfather-Father-Son"
    ],
    "ans": [
      2
    ],
    "why": "AUP stands for Acceptable Use Policy.",
    "tip": "AUP = Acceptable Use Policy.",
    "optionWhy": [
      "Incorrect. Remote Monitoring and Management is a different term, not the expansion asked for. The correct expansion is Acceptable Use Policy.",
      "Incorrect. Security Assertions Markup Language is a different term, not the expansion asked for. The correct expansion is Acceptable Use Policy.",
      "Correct. AUP stands for Acceptable Use Policy.",
      "Incorrect. Grandfather-Father-Son is a different term, not the expansion asked for. The correct expansion is Acceptable Use Policy."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does BEC stand for?",
    "opts": [
      "Mobile Device Management",
      "Business Email Compromise",
      "User Account Control",
      "Time-based One-time Password"
    ],
    "ans": [
      1
    ],
    "why": "BEC stands for Business Email Compromise.",
    "tip": "BEC = Business Email Compromise.",
    "optionWhy": [
      "Incorrect. Mobile Device Management is a different term, not the expansion asked for. The correct expansion is Business Email Compromise.",
      "Correct. BEC stands for Business Email Compromise.",
      "Incorrect. User Account Control is a different term, not the expansion asked for. The correct expansion is Business Email Compromise.",
      "Incorrect. Time-based One-time Password is a different term, not the expansion asked for. The correct expansion is Business Email Compromise."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does BSOD stand for?",
    "opts": [
      "Blue Screen of Death",
      "Encrypting File System",
      "Multifactor Authentication",
      "Remote Desktop Protocol"
    ],
    "ans": [
      0
    ],
    "why": "BSOD stands for Blue Screen of Death.",
    "tip": "BSOD = Blue Screen of Death.",
    "optionWhy": [
      "Correct. BSOD stands for Blue Screen of Death.",
      "Incorrect. Encrypting File System is a different term, not the expansion asked for. The correct expansion is Blue Screen of Death.",
      "Incorrect. Multifactor Authentication is a different term, not the expansion asked for. The correct expansion is Blue Screen of Death.",
      "Incorrect. Remote Desktop Protocol is a different term, not the expansion asked for. The correct expansion is Blue Screen of Death."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does BYOD stand for?",
    "opts": [
      "Bring Your Own Device",
      "Single Sign-on",
      "Configuration Management Database",
      "Mobile Device Management"
    ],
    "ans": [
      0
    ],
    "why": "BYOD stands for Bring Your Own Device.",
    "tip": "BYOD = Bring Your Own Device.",
    "optionWhy": [
      "Correct. BYOD stands for Bring Your Own Device.",
      "Incorrect. Single Sign-on is a different term, not the expansion asked for. The correct expansion is Bring Your Own Device.",
      "Incorrect. Configuration Management Database is a different term, not the expansion asked for. The correct expansion is Bring Your Own Device.",
      "Incorrect. Mobile Device Management is a different term, not the expansion asked for. The correct expansion is Bring Your Own Device."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does CMDB stand for?",
    "opts": [
      "Time-based One-time Password",
      "Remote Desktop Protocol",
      "Configuration Management Database",
      "Single Sign-on"
    ],
    "ans": [
      2
    ],
    "why": "CMDB stands for Configuration Management Database.",
    "tip": "CMDB = Configuration Management Database.",
    "optionWhy": [
      "Incorrect. Time-based One-time Password is a different term, not the expansion asked for. The correct expansion is Configuration Management Database.",
      "Incorrect. Remote Desktop Protocol is a different term, not the expansion asked for. The correct expansion is Configuration Management Database.",
      "Correct. CMDB stands for Configuration Management Database.",
      "Incorrect. Single Sign-on is a different term, not the expansion asked for. The correct expansion is Configuration Management Database."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does GFS stand for?",
    "opts": [
      "Grandfather-Father-Son",
      "Encrypting File System",
      "Standard Operating Procedure",
      "Extended Detection and Response"
    ],
    "ans": [
      0
    ],
    "why": "GFS stands for Grandfather-Father-Son.",
    "tip": "GFS = Grandfather-Father-Son.",
    "optionWhy": [
      "Correct. GFS stands for Grandfather-Father-Son.",
      "Incorrect. Encrypting File System is a different term, not the expansion asked for. The correct expansion is Grandfather-Father-Son.",
      "Incorrect. Standard Operating Procedure is a different term, not the expansion asked for. The correct expansion is Grandfather-Father-Son.",
      "Incorrect. Extended Detection and Response is a different term, not the expansion asked for. The correct expansion is Grandfather-Father-Son."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does MDM stand for?",
    "opts": [
      "Mobile Device Management",
      "Grandfather-Father-Son",
      "Blue Screen of Death",
      "Endpoint Detection and Response"
    ],
    "ans": [
      0
    ],
    "why": "MDM stands for Mobile Device Management.",
    "tip": "MDM = Mobile Device Management.",
    "optionWhy": [
      "Correct. MDM stands for Mobile Device Management.",
      "Incorrect. Grandfather-Father-Son is a different term, not the expansion asked for. The correct expansion is Mobile Device Management.",
      "Incorrect. Blue Screen of Death is a different term, not the expansion asked for. The correct expansion is Mobile Device Management.",
      "Incorrect. Endpoint Detection and Response is a different term, not the expansion asked for. The correct expansion is Mobile Device Management."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does RDP stand for?",
    "opts": [
      "Standard Operating Procedure",
      "Remote Desktop Protocol",
      "Endpoint Detection and Response",
      "Data Loss Prevention"
    ],
    "ans": [
      1
    ],
    "why": "RDP stands for Remote Desktop Protocol.",
    "tip": "RDP = Remote Desktop Protocol.",
    "optionWhy": [
      "Incorrect. Standard Operating Procedure is a different term, not the expansion asked for. The correct expansion is Remote Desktop Protocol.",
      "Correct. RDP stands for Remote Desktop Protocol.",
      "Incorrect. Endpoint Detection and Response is a different term, not the expansion asked for. The correct expansion is Remote Desktop Protocol.",
      "Incorrect. Data Loss Prevention is a different term, not the expansion asked for. The correct expansion is Remote Desktop Protocol."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does RMM stand for?",
    "opts": [
      "Acceptable Use Policy",
      "Remote Monitoring and Management",
      "Single Sign-on",
      "Endpoint Detection and Response"
    ],
    "ans": [
      1
    ],
    "why": "RMM stands for Remote Monitoring and Management.",
    "tip": "RMM = Remote Monitoring and Management.",
    "optionWhy": [
      "Incorrect. Acceptable Use Policy is a different term, not the expansion asked for. The correct expansion is Remote Monitoring and Management.",
      "Correct. RMM stands for Remote Monitoring and Management.",
      "Incorrect. Single Sign-on is a different term, not the expansion asked for. The correct expansion is Remote Monitoring and Management.",
      "Incorrect. Endpoint Detection and Response is a different term, not the expansion asked for. The correct expansion is Remote Monitoring and Management."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does SAML stand for?",
    "opts": [
      "Security Assertions Markup Language",
      "Service-level Agreement",
      "Acceptable Use Policy",
      "Grandfather-Father-Son"
    ],
    "ans": [
      0
    ],
    "why": "SAML stands for Security Assertions Markup Language.",
    "tip": "SAML = Security Assertions Markup Language.",
    "optionWhy": [
      "Correct. SAML stands for Security Assertions Markup Language.",
      "Incorrect. Service-level Agreement is a different term, not the expansion asked for. The correct expansion is Security Assertions Markup Language.",
      "Incorrect. Acceptable Use Policy is a different term, not the expansion asked for. The correct expansion is Security Assertions Markup Language.",
      "Incorrect. Grandfather-Father-Son is a different term, not the expansion asked for. The correct expansion is Security Assertions Markup Language."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does SLA stand for?",
    "opts": [
      "Remote Monitoring and Management",
      "Encrypting File System",
      "Single Sign-on",
      "Service-level Agreement"
    ],
    "ans": [
      3
    ],
    "why": "SLA stands for Service-level Agreement.",
    "tip": "SLA = Service-level Agreement.",
    "optionWhy": [
      "Incorrect. Remote Monitoring and Management is a different term, not the expansion asked for. The correct expansion is Service-level Agreement.",
      "Incorrect. Encrypting File System is a different term, not the expansion asked for. The correct expansion is Service-level Agreement.",
      "Incorrect. Single Sign-on is a different term, not the expansion asked for. The correct expansion is Service-level Agreement.",
      "Correct. SLA stands for Service-level Agreement."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does SOP stand for?",
    "opts": [
      "Extended Detection and Response",
      "Standard Operating Procedure",
      "Mobile Device Management",
      "Time-based One-time Password"
    ],
    "ans": [
      1
    ],
    "why": "SOP stands for Standard Operating Procedure.",
    "tip": "SOP = Standard Operating Procedure.",
    "optionWhy": [
      "Incorrect. Extended Detection and Response is a different term, not the expansion asked for. The correct expansion is Standard Operating Procedure.",
      "Correct. SOP stands for Standard Operating Procedure.",
      "Incorrect. Mobile Device Management is a different term, not the expansion asked for. The correct expansion is Standard Operating Procedure.",
      "Incorrect. Time-based One-time Password is a different term, not the expansion asked for. The correct expansion is Standard Operating Procedure."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does SSO stand for?",
    "opts": [
      "Encrypting File System",
      "Single Sign-on",
      "Remote Monitoring and Management",
      "Acceptable Use Policy"
    ],
    "ans": [
      1
    ],
    "why": "SSO stands for Single Sign-on.",
    "tip": "SSO = Single Sign-on.",
    "optionWhy": [
      "Incorrect. Encrypting File System is a different term, not the expansion asked for. The correct expansion is Single Sign-on.",
      "Correct. SSO stands for Single Sign-on.",
      "Incorrect. Remote Monitoring and Management is a different term, not the expansion asked for. The correct expansion is Single Sign-on.",
      "Incorrect. Acceptable Use Policy is a different term, not the expansion asked for. The correct expansion is Single Sign-on."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does TOTP stand for?",
    "opts": [
      "Bring Your Own Device",
      "Service-level Agreement",
      "Time-based One-time Password",
      "Extended Detection and Response"
    ],
    "ans": [
      2
    ],
    "why": "TOTP stands for Time-based One-time Password.",
    "tip": "TOTP = Time-based One-time Password.",
    "optionWhy": [
      "Incorrect. Bring Your Own Device is a different term, not the expansion asked for. The correct expansion is Time-based One-time Password.",
      "Incorrect. Service-level Agreement is a different term, not the expansion asked for. The correct expansion is Time-based One-time Password.",
      "Correct. TOTP stands for Time-based One-time Password.",
      "Incorrect. Extended Detection and Response is a different term, not the expansion asked for. The correct expansion is Time-based One-time Password."
    ]
  },
  {
    "domain": "Acronym Challenge",
    "obj": "Acronyms",
    "q": "What does XDR stand for?",
    "opts": [
      "Remote Desktop Protocol",
      "Configuration Management Database",
      "Extended Detection and Response",
      "Business Email Compromise"
    ],
    "ans": [
      2
    ],
    "why": "XDR stands for Extended Detection and Response.",
    "tip": "XDR = Extended Detection and Response.",
    "optionWhy": [
      "Incorrect. Remote Desktop Protocol is a different term, not the expansion asked for. The correct expansion is Extended Detection and Response.",
      "Incorrect. Configuration Management Database is a different term, not the expansion asked for. The correct expansion is Extended Detection and Response.",
      "Correct. XDR stands for Extended Detection and Response.",
      "Incorrect. Business Email Compromise is a different term, not the expansion asked for. The correct expansion is Extended Detection and Response."
    ]
  }
];
