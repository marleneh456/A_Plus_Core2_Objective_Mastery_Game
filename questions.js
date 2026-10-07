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
    "tip": "NTFS \u2192 Windows; APFS \u2192 Apple; ext4/XFS \u2192 Linux."
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
    "tip": "Clean = fresh start."
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
    "tip": "BitLocker = Windows drive encryption."
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
    "tip": "Event Viewer = Windows logs."
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
    "tip": "diskmgmt.msc = Disk Management."
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
    "tip": "ipconfig = IP configuration."
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
    "tip": "SFC = System File Checker."
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
    "tip": "ping = quick reachability test."
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
    "tip": "Laptop lid behavior \u2192 Power Options."
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
    "tip": "VPN = secure remote network connection."
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
    "tip": "Time Machine = macOS backups."
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
    "tip": "FileVault = Mac encryption."
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
    "tip": "ls = list."
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
    "tip": "chmod = change mode/permissions."
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
    "tip": "apt \u2192 Debian/Ubuntu-style package management."
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
    "tip": "Check requirements before installing."
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
    "tip": "Cloud sync keeps files consistent across devices."
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
    "tip": "Least privilege = only what you need."
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
    "tip": "MFA = multiple factors."
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
    "tip": "BitLocker-To-Go = removable drive encryption."
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
    "tip": "UAC = control admin elevation."
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
    "tip": "WPA3 is newer than WPA2."
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
    "tip": "Ransomware = ransom for data/access."
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
    "tip": "Keylogger = logs keys."
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
    "tip": "Spear phishing = targeted phishing."
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
    "tip": "Tailgating = follow someone through access control."
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
    "tip": "SMS + phishing = smishing."
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
    "tip": "Verify \u2192 quarantine."
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
    "tip": "If you don't need the service, disable it."
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
    "tip": "Lost device \u2192 remote wipe."
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
    "tip": "Physical destruction is stronger than logical deletion."
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
    "tip": "New router \u2192 change default credentials."
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
    "tip": "Secure site \u2192 check certificate validity."
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
    "tip": "BSOD = Windows troubleshooting."
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
    "tip": "No OS found = boot/storage/OS troubleshooting path."
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
    "tip": "Clock slowly wrong = time drift."
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
    "tip": "Unexpected restarts = random reboots."
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
    "tip": "Rotation problem \u2192 autorotate troubleshooting."
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
    "tip": "Ads + fake warnings = suspect malicious/unwanted software."
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
    "tip": "Use trusted app sources."
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
    "tip": "Unexpected redirects = investigate browser/security."
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
    "tip": "Good tickets tell the story: issue \u2192 progress \u2192 resolution."
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
    "tip": "Before changing, know how to undo it."
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
    "tip": "Test changes away from production first."
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
    "tip": "Full = everything selected."
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
    "tip": "3-2-1: 3 copies, 2 media types, 1 offsite."
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
    "tip": "Inside the PC \u2192 power off/disconnect first."
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
    "tip": "ESD strap protects sensitive electronics from static."
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
    "tip": "UPS = backup power; surge suppressor = surge protection."
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
    "tip": "Evidence needs a documented custody trail."
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
    "tip": "Listen first; clarify professionally."
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
    "tip": "PowerShell \u2192 .ps1."
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
    "tip": "Scripts automate repeatable software tasks."
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
    "tip": "RDP = graphical Windows remote desktop."
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
    "tip": "AI can sound confident and still be wrong\u2014verify outputs."
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
    "tip": "Public AI + company data \u2192 think privacy and policy first."
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
    "tip": "UAC = User Account Control."
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
    "tip": "MFA = Multifactor Authentication."
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
    "tip": "DLP = Data Loss Prevention."
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
    "tip": "EDR = Endpoint Detection and Response."
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
    "tip": "EFS = Encrypting File System."
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
    "tip": "EOL = End-of-life."
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
    "tip": "AUP = Acceptable Use Policy."
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
    "tip": "BEC = Business Email Compromise."
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
    "tip": "BSOD = Blue Screen of Death."
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
    "tip": "BYOD = Bring Your Own Device."
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
    "tip": "CMDB = Configuration Management Database."
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
    "tip": "GFS = Grandfather-Father-Son."
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
    "tip": "MDM = Mobile Device Management."
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
    "tip": "RDP = Remote Desktop Protocol."
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
    "tip": "RMM = Remote Monitoring and Management."
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
    "tip": "SAML = Security Assertions Markup Language."
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
    "tip": "SLA = Service-level Agreement."
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
    "tip": "SOP = Standard Operating Procedure."
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
    "tip": "SSO = Single Sign-on."
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
    "tip": "TOTP = Time-based One-time Password."
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
    "tip": "XDR = Extended Detection and Response."
  }
];