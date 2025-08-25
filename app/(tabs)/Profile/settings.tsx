import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ChevronRight, Palette, Shield, Bell, CircleQuestionMark as HelpCircle } from 'lucide-react-native';
import { Stack } from 'expo-router';
import { useTheme } from '../../_layout';
import ThemeToggle from '../../../components/ui/ThemeToggle';

interface SettingsOptionProps {
  icon: React.ReactNode;
  text: string;
  onPress?: () => void;
  children?: React.ReactNode;
  showChevron?: boolean;
}

const SettingsOption: React.FC<SettingsOptionProps> = ({ 
  icon, 
  text, 
  onPress, 
  children, 
  showChevron = true 
}) => {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'gray' : 'black';
  
  const content = (
    <View className="flex-row items-center justify-between p-4">
      <View className="flex-row items-center flex-1">
        <View className="mr-3">
          {React.cloneElement(icon as React.ReactElement, {
            size: 24,
            className: theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          })}
        </View>
        <Text className={`text-lg font-medium flex-1 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {text}
        </Text>
      </View>
      {children || (showChevron && (
        <ChevronRight 
          size={20} 
          color = {iconColor}
          className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} 
        />
      ))}
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }

  return <View>{content}</View>;
};

const SettingsScreen = () => {
  const { theme } = useTheme();

  const handleNotificationSettings = () => {
    console.log('Notification Settings pressed');
  };

  const handlePrivacyPolicy = () => {
    console.log('Privacy Policy pressed');
  };

  const handleHelp = () => {
    console.log('Help pressed');
  };

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerShown: true, 
          title: 'Settings',
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
          },
          headerTintColor: theme === 'dark' ? '#ffffff' : '#000000',
        }} 
      />
      <ScrollView className={`flex-1 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Appearance Section */}
        <View className="mt-6">
          <Text className={`text-sm font-semibold uppercase tracking-wide px-4 mb-3 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Appearance
          </Text>
          <View className={`mx-4 rounded-xl overflow-hidden ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-sm`}>
            <ThemeToggle onPress={() => {}} />
          </View>
        </View>

        {/* Separator */}
        <View className={`h-px mx-4 my-6 ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
        }`} />

        {/* Notifications Section */}
        <View>
          <Text className={`text-sm font-semibold uppercase tracking-wide px-4 mb-3 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Notifications
          </Text>
          <View className={`mx-4 rounded-xl overflow-hidden ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-sm`}>
            <SettingsOption
              icon={<Bell />}
              text="Notification Preferences"
              onPress={handleNotificationSettings}
            />
          </View>
        </View>

        {/* Separator */}
        <View className={`h-px mx-4 my-6 ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
        }`} />

        {/* Privacy & Support Section */}
        <View>
          <Text className={`text-sm font-semibold uppercase tracking-wide px-4 mb-3 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Privacy & Support
          </Text>
          <View className={`mx-4 rounded-xl overflow-hidden ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-sm`}>
            <SettingsOption
              icon={<Shield  color = {iconColor}/>}
              text="Privacy Policy"
              onPress={handlePrivacyPolicy}
            />
            <View className={`h-px ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
            }`} />
            <SettingsOption
              icon={<HelpCircle />}
              text="Help & Support"
              onPress={handleHelp}
            />
          </View>
        </View>

        {/* Bottom spacing */}
        <View className="h-8" />
      </ScrollView>
    </>
  );
};

export default SettingsScreen;