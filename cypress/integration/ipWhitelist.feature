Feature: IP Whitelist
  
  Scenario: Add Valid IP  
      Given I open the url "https://dashboard.xendit.co/login"
      And I set "Overtime_16" to the inputfield "Password"
      And I set "stephen.viterbo@xendit.co" to the inputfield "Email"
      And I click on the button "Login"
      And I wait for 15000 miliseconds
      And I click on the button "Settings"
      And I click on the button "IP_whitelist_Link"
      And I click on the button "IP_Whitelist_Tab"
      And I click on the button "Add_IP_Address_CIDR"
      And I click on the element "IP_Inputfield"
      And I set "1.1.1.1" to the inputfield "IP_Inputfield"
      And I click on the button "Add_IP"
      Then I click on the button "Okay"

  Scenario: Add Multiple Valid IP  
      Given I open the url "https://dashboard.xendit.co/login"
      And I set "Overtime_16" to the inputfield "Password"
      And I set "stephen.viterbo@xendit.co" to the inputfield "Email"
      And I click on the button "Login"
      And I wait for 15000 miliseconds
      And I click on the button "Settings"
      And I click on the button "IP_whitelist_Link"
      And I click on the button "IP_Whitelist_Tab"
      And I click on the button "Add_IP_Address_CIDR"
      And I click on the element "IP_Inputfield"
      And I set "1.1.1.1" to the inputfield "IP_Inputfield"
      And I press {Enter}
      And I set "1.2.3.4" to the inputfield "IP_Inputfield"
      And I click on the button "Add_IP"
      And I click on the button "Okay"


  Scenario: Add Valid IP  
      Given I open the url "https://dashboard.xendit.co/login"
      And I set "Overtime_16" to the inputfield "Password"
      And I set "stephen.viterbo@xendit.co" to the inputfield "Email"
      And I click on the button "Login"
      And I wait for 15000 miliseconds
      And I click on the button "Settings"
      And I click on the button "IP_whitelist_Link"
      And I click on the button "IP_Whitelist_Tab"
      And I click on the button "Add_IP_Address_CIDR"
      And I click on the element "IP_Inputfield"
      And I set "abc.efg.hij.klm" to the inputfield "IP_Inputfield"
      And I click on the button "Add_IP"
      Then I click on the button "Okay"

Scenario: Delete All IP  
      Given I open the url "https://dashboard.xendit.co/login"
      And I set "Overtime_16" to the inputfield "Password"
      And I set "stephen.viterbo@xendit.co" to the inputfield "Email"
      And I click on the button "Login"
      And I wait for 15000 miliseconds
      And I click on the button "Settings"
      And I click on the button "IP_whitelist_Link"
      And I click on the button "IP_Whitelist_Tab"
      And I click on the button "IP_All_Radio_Button"
      And I click on the element "Delete"
      And I click on the element "Remove"
      Then I click on the button "Okay"
      And I expect the element "IP" does not appear exactly "0" times