Feature: Navbar Visibility and Note Creation

  Scenario: Navbar is visible and notes are created
    Given the user navigates to the homepage
    Then the navbar should be visible
    And at least one note should be created