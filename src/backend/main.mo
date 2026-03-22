import Text "mo:core/Text";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Activity = {
    title : Text;
    description : Text;
  };

  module Activity {
    public func compare(activity1 : Activity, activity2 : Activity) : Order.Order {
      Text.compare(activity1.title, activity2.title);
    };
  };

  type Achievement = {
    title : Text;
    description : Text;
    year : Text;
  };

  module Achievement {
    public func compare(achievement1 : Achievement, achievement2 : Achievement) : Order.Order {
      switch (Text.compare(achievement1.year, achievement2.year)) {
        case (#equal) { Text.compare(achievement1.title, achievement2.title) };
	      case (order) { order };
      };
    };
  };

  type ContactInfo = {
    address : Text;
    phone : Text;
    email : Text;
  };

  let activities = List.fromArray<Activity>([
    { title = "Community Outreach"; description = "Engaging with local communities to provide support and resources." },
    { title = "Health Camps"; description = "Organizing free health check-ups and awareness programs." },
    { title = "Educational Programs"; description = "Providing educational materials and support to underprivileged children." },
  ]);

  let achievements = List.fromArray<Achievement>([
    { title = "Awarded Best NGO 2020"; description = "Recognized for outstanding community service."; year = "2020" },
    { title = "Healthcare Initiative Success"; description = "Reached over 5000 families with healthcare services."; year = "2019" },
  ]);

  var contactInfo : ContactInfo = {
    address = "123 HOPE Trust Street, New Delhi, India";
    phone = "+91 9876543210";
    email = "info@hopetrust.org";
  };

  public shared ({ caller }) func updateContactInfo(address : Text, phone : Text, email : Text) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized access. Only admin can update contact information.");
    };
    contactInfo := { address; phone; email };
  };

  public query ({ caller }) func getActivities() : async [Activity] {
    activities.values().toArray().sort();
  };

  public query ({ caller }) func getAchievements() : async [Achievement] {
    achievements.values().toArray().sort();
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };
};
