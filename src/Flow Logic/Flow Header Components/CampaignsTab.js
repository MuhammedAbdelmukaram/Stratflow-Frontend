// CampaignsTab.js
import React from 'react';

const CampaignsTab = ({ campaignsData, selectedAdGroupIds, setSelectedAdGroupIds }) => {
    // Function to handle ad group selection
    const handleAdGroupSelection = (adGroupId) => {
        setSelectedAdGroupIds((prevSelectedIds) =>
            prevSelectedIds.includes(adGroupId)
                ? prevSelectedIds.filter((id) => id !== adGroupId)
                : [...prevSelectedIds, adGroupId]
        );

    };

    return (
        <div>
            {Object.values(campaignsData).map((campaign) => (
                <div key={campaign.campaign_id}>
                    <h3>{campaign.campaign_name}</h3>
                    {campaign.adGroups.map((adGroup) => (
                        <div key={adGroup.adgroup_id}>
                            <input
                                type="checkbox"
                                checked={selectedAdGroupIds.includes(adGroup.adgroup_id)}
                                onChange={() => handleAdGroupSelection(adGroup.adgroup_id)}
                            />
                            <label>{adGroup.adgroup_name}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CampaignsTab;
